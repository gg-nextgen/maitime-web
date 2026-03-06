import { createSession } from "@/lib/chat-db";
import { headers } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const headersList = await headers();
    const ip = (headersList.get("x-forwarded-for") ?? "unknown")
      .split(",")[0]
      .trim();
    // Anonymize: keep only first 3 octets
    const anonIp = ip.includes(".")
      ? ip.split(".").slice(0, 3).join(".") + ".0"
      : ip;
    const userAgent = headersList.get("user-agent");
    const pageOrigin = body.pageOrigin ?? null;

    const sessionId = await createSession(anonIp, userAgent, pageOrigin);
    return Response.json({ sessionId });
  } catch (error) {
    console.error("[CHAT SESSION] Error creating session:", error);
    return Response.json({ error: "Failed to create session" }, { status: 500 });
  }
}
