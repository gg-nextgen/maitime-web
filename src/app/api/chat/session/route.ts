import { createSession, createLead, getLeadById, incrementLeadSessions } from "@/lib/chat-db";
import { cookies, headers } from "next/headers";

const LEAD_COOKIE = "maitime-lead-id";
const LEAD_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const headersList = await headers();
    const cookieStore = await cookies();

    const ip = (headersList.get("x-forwarded-for") ?? "unknown")
      .split(",")[0]
      .trim();
    // Anonymize: keep only first 3 octets
    const anonIp = ip.includes(".")
      ? ip.split(".").slice(0, 3).join(".") + ".0"
      : ip;
    const userAgent = headersList.get("user-agent");
    const pageOrigin = body.pageOrigin ?? null;

    // Check for existing lead cookie
    let leadId: string | null = cookieStore.get(LEAD_COOKIE)?.value ?? null;

    if (leadId) {
      // Verify lead exists in DB
      const existingLead = await getLeadById(leadId);
      if (existingLead) {
        await incrementLeadSessions(leadId, anonIp);
      } else {
        // Cookie references non-existent lead, create new one
        leadId = await createLead(anonIp);
      }
    } else {
      // First visit: create a new lead
      leadId = await createLead(anonIp);
    }

    // Set/refresh lead cookie
    cookieStore.set(LEAD_COOKIE, leadId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: LEAD_COOKIE_MAX_AGE,
      path: "/",
    });

    const sessionId = await createSession(anonIp, userAgent, pageOrigin, leadId);
    return Response.json({ sessionId });
  } catch (error) {
    console.error("[CHAT SESSION] Error creating session:", error);
    return Response.json({ error: "Failed to create session" }, { status: 500 });
  }
}
