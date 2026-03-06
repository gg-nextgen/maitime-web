import { getSessions } from "@/lib/chat-db";

export async function GET(req: Request) {
  const password = req.headers.get("x-admin-password");
  if (password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const limit = parseInt(url.searchParams.get("limit") ?? "50");
  const offset = parseInt(url.searchParams.get("offset") ?? "0");
  const status = url.searchParams.get("status") ?? "all";

  try {
    const data = await getSessions(limit, offset, status);
    return Response.json(data);
  } catch (error) {
    console.error("[ADMIN] Error fetching sessions:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
