import {
  getSessionMessages,
  getLeadBySessionId,
  getLeadSessions,
  updateSessionStatus,
  updateSessionNotes,
} from "@/lib/chat-db";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(req: Request, { params }: RouteParams) {
  const password = req.headers.get("x-admin-password");
  if (password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const messages = await getSessionMessages(id);
    const lead = await getLeadBySessionId(id);
    let leadSessions = null;
    if (lead && lead.sessions_count > 1) {
      leadSessions = await getLeadSessions(lead.id);
    }
    return Response.json({ messages, lead, leadSessions });
  } catch (error) {
    console.error("[ADMIN] Error fetching messages:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: RouteParams) {
  const password = req.headers.get("x-admin-password");
  if (password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();

  try {
    if (body.status) {
      await updateSessionStatus(id, body.status);
    }
    if (body.notes !== undefined) {
      await updateSessionNotes(id, body.notes);
    }
    return Response.json({ ok: true });
  } catch (error) {
    console.error("[ADMIN] Error updating session:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
