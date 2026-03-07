import { randomUUID } from "crypto";
import { getPool } from "./db";

export async function createSession(
  ipAddress: string | null,
  userAgent: string | null,
  pageOrigin: string | null,
  leadId: string | null = null
): Promise<string> {
  const id = randomUUID();
  const pool = getPool();
  await pool.execute(
    `INSERT INTO chat_sessions (id, ip_address, user_agent, page_origin, lead_id) VALUES (?, ?, ?, ?, ?)`,
    [id, ipAddress, userAgent, pageOrigin, leadId]
  );
  return id;
}

export async function saveMessage(
  sessionId: string,
  role: "user" | "assistant",
  content: string
): Promise<void> {
  const id = randomUUID();
  const pool = getPool();
  await pool.execute(
    `INSERT INTO chat_messages (id, session_id, role, content) VALUES (?, ?, ?, ?)`,
    [id, sessionId, role, content]
  );
  await pool.execute(
    `UPDATE chat_sessions SET messages_count = messages_count + 1, last_message_at = NOW() WHERE id = ?`,
    [sessionId]
  );
}

export interface ChatSession {
  id: string;
  started_at: string;
  last_message_at: string;
  ip_address: string | null;
  user_agent: string | null;
  page_origin: string | null;
  messages_count: number;
  status: "active" | "completed" | "lead";
  notes: string | null;
  lead_id: string | null;
}

export interface ChatMessage {
  id: string;
  session_id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

export async function getSessions(
  limit = 50,
  offset = 0,
  status?: string
): Promise<{ sessions: ChatSession[]; total: number }> {
  const pool = getPool();
  let where = "";
  let join = "";
  const params: (string | number)[] = [];

  if (status === "visitor") {
    // Visitor: has lead_id but lead has no email
    join = "LEFT JOIN chat_leads l ON s.lead_id = l.id";
    where = "WHERE s.lead_id IS NOT NULL AND (l.email IS NULL OR l.email = '')";
  } else if (status && status !== "all") {
    where = `WHERE s.status = ?`;
    params.push(status);
  }

  const [countRows] = await pool.execute(
    `SELECT COUNT(*) as total FROM chat_sessions s ${join} ${where}`,
    params
  );
  const total = Number((countRows as { total: number }[])[0].total);

  const [rows] = await pool.execute(
    `SELECT s.* FROM chat_sessions s ${join} ${where} ORDER BY s.last_message_at DESC LIMIT ${Number(limit)} OFFSET ${Number(offset)}`,
    params
  );

  return { sessions: rows as ChatSession[], total };
}

export async function getLeadSessions(
  leadId: string
): Promise<ChatSession[]> {
  const pool = getPool();
  const [rows] = await pool.execute(
    `SELECT * FROM chat_sessions WHERE lead_id = ? ORDER BY started_at DESC`,
    [leadId]
  );
  return rows as ChatSession[];
}

export async function getSessionMessages(
  sessionId: string
): Promise<ChatMessage[]> {
  const pool = getPool();
  const [rows] = await pool.execute(
    `SELECT * FROM chat_messages WHERE session_id = ? ORDER BY created_at ASC`,
    [sessionId]
  );
  return rows as ChatMessage[];
}

export async function updateSessionStatus(
  sessionId: string,
  status: "active" | "completed" | "lead"
): Promise<void> {
  const pool = getPool();
  await pool.execute(`UPDATE chat_sessions SET status = ? WHERE id = ?`, [
    status,
    sessionId,
  ]);
}

export async function updateSessionNotes(
  sessionId: string,
  notes: string
): Promise<void> {
  const pool = getPool();
  await pool.execute(`UPDATE chat_sessions SET notes = ? WHERE id = ?`, [
    notes,
    sessionId,
  ]);
}

export interface LeadData {
  first_name?: string;
  last_name?: string;
  email?: string;
  company_name?: string;
  company_type?: string;
  problems?: string;
  location?: string;
  ip_address?: string;
  additional_info?: string;
}

const LEAD_FIELDS = [
  "first_name",
  "last_name",
  "email",
  "company_name",
  "company_type",
  "problems",
  "location",
  "ip_address",
  "additional_info",
] as const;

export async function getLeadById(
  leadId: string
): Promise<(LeadData & { id: string; sessions_count: number }) | null> {
  const pool = getPool();
  const [rows] = await pool.execute(
    `SELECT * FROM chat_leads WHERE id = ?`,
    [leadId]
  );
  const results = rows as (LeadData & { id: string; sessions_count: number })[];
  return results.length > 0 ? results[0] : null;
}

export async function createLead(
  ipAddress: string | null
): Promise<string> {
  const id = randomUUID();
  const pool = getPool();
  await pool.execute(
    `INSERT INTO chat_leads (id, ip_address, sessions_count) VALUES (?, ?, 1)`,
    [id, ipAddress]
  );
  return id;
}

export async function incrementLeadSessions(leadId: string, ipAddress: string | null): Promise<void> {
  const pool = getPool();
  await pool.execute(
    `UPDATE chat_leads SET sessions_count = sessions_count + 1, ip_address = COALESCE(?, ip_address) WHERE id = ?`,
    [ipAddress, leadId]
  );
}

export async function getLeadBySessionId(
  sessionId: string
): Promise<(LeadData & { id: string; sessions_count: number }) | null> {
  const pool = getPool();
  const [rows] = await pool.execute(
    `SELECT l.* FROM chat_leads l JOIN chat_sessions s ON s.lead_id = l.id WHERE s.id = ?`,
    [sessionId]
  );
  const results = rows as (LeadData & { id: string; sessions_count: number })[];
  return results.length > 0 ? results[0] : null;
}

export async function upsertLead(
  sessionId: string,
  data: LeadData
): Promise<void> {
  const pool = getPool();

  // Find lead via session's lead_id
  const lead = await getLeadBySessionId(sessionId);

  if (lead) {
    // Update only non-null fields
    const updates: string[] = [];
    const params: string[] = [];
    for (const key of LEAD_FIELDS) {
      const value = data[key];
      if (value) {
        updates.push(`${key} = ?`);
        params.push(value);
      }
    }
    if (updates.length > 0) {
      params.push(lead.id);
      await pool.execute(
        `UPDATE chat_leads SET ${updates.join(", ")} WHERE id = ?`,
        params
      );
    }
  } else {
    // Fallback: create a new lead and link it to the session
    const id = randomUUID();
    await pool.execute(
      `INSERT INTO chat_leads (id, first_name, last_name, email, company_name, company_type, problems, location, ip_address, additional_info) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        data.first_name || null,
        data.last_name || null,
        data.email || null,
        data.company_name || null,
        data.company_type || null,
        data.problems || null,
        data.location || null,
        data.ip_address || null,
        data.additional_info || null,
      ]
    );
    await pool.execute(
      `UPDATE chat_sessions SET lead_id = ? WHERE id = ?`,
      [id, sessionId]
    );
  }

  // Mark session as lead only if email is present
  const updatedLead = await getLeadBySessionId(sessionId);
  if (updatedLead?.email) {
    await pool.execute(
      `UPDATE chat_sessions SET status = 'lead' WHERE id = ?`,
      [sessionId]
    );
  }
}
