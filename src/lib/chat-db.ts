import { randomUUID } from "crypto";
import { getPool } from "./db";

export async function createSession(
  ipAddress: string | null,
  userAgent: string | null,
  pageOrigin: string | null
): Promise<string> {
  const id = randomUUID();
  const pool = getPool();
  await pool.execute(
    `INSERT INTO chat_sessions (id, ip_address, user_agent, page_origin) VALUES (?, ?, ?, ?)`,
    [id, ipAddress, userAgent, pageOrigin]
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
  const params: (string | number)[] = [];

  if (status && status !== "all") {
    where = "WHERE status = ?";
    params.push(status);
  }

  const [countRows] = await pool.execute(
    `SELECT COUNT(*) as total FROM chat_sessions ${where}`,
    params
  );
  const total = Number((countRows as { total: number }[])[0].total);

  const [rows] = await pool.execute(
    `SELECT * FROM chat_sessions ${where} ORDER BY last_message_at DESC LIMIT ${Number(limit)} OFFSET ${Number(offset)}`  ,
    params
  );

  return { sessions: rows as ChatSession[], total };
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
  email?: string;
  company_name?: string;
  company_type?: string;
  problems?: string;
  location?: string;
  additional_info?: string;
}

export async function upsertLead(
  sessionId: string,
  data: LeadData
): Promise<void> {
  const pool = getPool();

  // Check if lead already exists for this session
  const [rows] = await pool.execute(
    `SELECT id FROM chat_leads WHERE session_id = ?`,
    [sessionId]
  );
  const existing = rows as { id: string }[];

  if (existing.length > 0) {
    // Update only non-null fields
    const updates: string[] = [];
    const params: string[] = [];
    for (const [key, value] of Object.entries(data)) {
      if (value) {
        updates.push(`${key} = ?`);
        params.push(value);
      }
    }
    if (updates.length > 0) {
      params.push(existing[0].id);
      await pool.execute(
        `UPDATE chat_leads SET ${updates.join(", ")} WHERE id = ?`,
        params
      );
    }
  } else {
    const id = randomUUID();
    await pool.execute(
      `INSERT INTO chat_leads (id, session_id, email, company_name, company_type, problems, location, additional_info) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        sessionId,
        data.email || null,
        data.company_name || null,
        data.company_type || null,
        data.problems || null,
        data.location || null,
        data.additional_info || null,
      ]
    );
  }

  // Mark session as lead
  await pool.execute(
    `UPDATE chat_sessions SET status = 'lead' WHERE id = ?`,
    [sessionId]
  );
}
