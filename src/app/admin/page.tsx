"use client";

import { useState, useEffect, useCallback } from "react";

interface ChatSession {
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

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [total, setTotal] = useState(0);
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [error, setError] = useState("");

  const fetchSessions = useCallback(async () => {
    try {
      const res = await fetch(
        `/api/admin/sessions?status=${statusFilter}&limit=50`,
        { headers: { "x-admin-password": password } }
      );
      if (!res.ok) {
        setError("Accesso negato");
        setAuthenticated(false);
        return;
      }
      const data = await res.json();
      setSessions(data.sessions);
      setTotal(data.total);
      setError("");
    } catch {
      setError("Errore di connessione");
    }
  }, [password, statusFilter]);

  useEffect(() => {
    if (authenticated) fetchSessions();
  }, [authenticated, statusFilter, fetchSessions]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/sessions?limit=1", {
      headers: { "x-admin-password": password },
    });
    if (res.ok) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Password errata");
    }
  }

  async function loadMessages(sessionId: string) {
    setSelectedSession(sessionId);
    setLoadingMessages(true);
    try {
      const res = await fetch(`/api/admin/sessions/${sessionId}`, {
        headers: { "x-admin-password": password },
      });
      const data = await res.json();
      setMessages(data.messages);
    } catch {
      setMessages([]);
    }
    setLoadingMessages(false);
  }

  async function updateStatus(
    sessionId: string,
    status: "active" | "completed" | "lead"
  ) {
    await fetch(`/api/admin/sessions/${sessionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify({ status }),
    });
    fetchSessions();
  }

  async function saveNotes(sessionId: string, notes: string) {
    await fetch(`/api/admin/sessions/${sessionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify({ notes }),
    });
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function getFirstUserMessage(session: ChatSession): string {
    return `${session.messages_count} messaggi`;
  }

  function getStatusColor(status: string) {
    switch (status) {
      case "lead":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    }
  }

  function getOriginLabel(origin: string | null) {
    switch (origin) {
      case "hero":
        return "Homepage";
      case "floating":
        return "Chat Floating";
      default:
        return origin ?? "—";
    }
  }

  // Login screen
  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm space-y-4 rounded-xl border border-white/10 bg-[#000030] p-8"
        >
          <h1 className="text-2xl font-bold">Admin Chat</h1>
          <p className="text-sm text-white/60">
            Inserisci la password per accedere.
          </p>
          {error && (
            <p className="text-sm text-red-400">{error}</p>
          )}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg bg-white/[0.06] px-4 py-3 text-white outline-none focus:ring-1 focus:ring-[#FF00FF]/50"
            autoFocus
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-[#5B21B6] to-[#FF00FF] py-3 font-bold text-white"
          >
            Accedi
          </button>
        </form>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Conversazioni Chat</h1>
            <p className="mt-1 text-white/60">
              {total} conversazioni totali
            </p>
          </div>
          <button
            onClick={fetchSessions}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/70 hover:bg-white/5"
          >
            Aggiorna
          </button>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-2">
          {["all", "active", "completed", "lead"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`rounded-full px-4 py-1.5 text-sm capitalize transition-colors ${
                statusFilter === s
                  ? "bg-[#FF00FF]/20 text-[#FF00FF]"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {s === "all" ? "Tutte" : s}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Session list */}
          <div className="space-y-2 lg:col-span-2">
            {sessions.length === 0 && (
              <p className="py-12 text-center text-white/40">
                Nessuna conversazione trovata.
              </p>
            )}
            {sessions.map((session) => (
              <button
                key={session.id}
                onClick={() => loadMessages(session.id)}
                className={`w-full rounded-lg border p-4 text-left transition-colors ${
                  selectedSession === session.id
                    ? "border-[#FF00FF]/40 bg-[#FF00FF]/5"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase ${getStatusColor(session.status)}`}
                      >
                        {session.status}
                      </span>
                      <span className="text-xs text-white/40">
                        {getOriginLabel(session.page_origin)}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-white/70">
                      {getFirstUserMessage(session)}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-white/30">
                    {formatDate(session.started_at)}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Message detail */}
          <div className="lg:col-span-3">
            {!selectedSession && (
              <div className="flex h-64 items-center justify-center rounded-xl border border-white/10 text-white/30">
                Seleziona una conversazione
              </div>
            )}
            {selectedSession && (
              <div className="rounded-xl border border-white/10 bg-white/[0.02]">
                {/* Session actions */}
                <div className="flex items-center gap-2 border-b border-white/10 p-4">
                  <span className="text-sm text-white/50">Stato:</span>
                  {(["active", "completed", "lead"] as const).map((s) => {
                    const currentSession = sessions.find(
                      (sess) => sess.id === selectedSession
                    );
                    return (
                      <button
                        key={s}
                        onClick={() => updateStatus(selectedSession, s)}
                        className={`rounded-full border px-3 py-1 text-xs capitalize transition-colors ${
                          currentSession?.status === s
                            ? getStatusColor(s)
                            : "border-white/10 text-white/30 hover:text-white/60"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>

                {/* Messages */}
                <div className="max-h-[500px] overflow-y-auto p-4">
                  {loadingMessages && (
                    <p className="text-center text-white/40">Caricamento...</p>
                  )}
                  <div className="space-y-3">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                            msg.role === "user"
                              ? "bg-[#5B21B6]/30 text-white"
                              : "bg-white/[0.06] text-white/80"
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                          <p className="mt-1 text-[10px] text-white/30">
                            {formatDate(msg.created_at)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="border-t border-white/10 p-4">
                  <textarea
                    placeholder="Note su questa conversazione..."
                    defaultValue={
                      sessions.find((s) => s.id === selectedSession)?.notes ?? ""
                    }
                    onBlur={(e) => saveNotes(selectedSession, e.target.value)}
                    className="w-full rounded-lg bg-white/[0.04] px-3 py-2 text-sm text-white/70 outline-none placeholder:text-white/20 focus:ring-1 focus:ring-[#FF00FF]/30"
                    rows={2}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
