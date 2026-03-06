"use client";

import { TextStreamChatTransport } from "ai";

let sessionId: string | null = null;
let sessionPromise: Promise<string> | null = null;

async function getOrCreateSession(pageOrigin: string): Promise<string> {
  if (sessionId) return sessionId;
  if (sessionPromise) return sessionPromise;

  sessionPromise = fetch("/api/chat/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pageOrigin }),
  })
    .then((res) => res.json())
    .then((data) => {
      sessionId = data.sessionId;
      return data.sessionId as string;
    });

  return sessionPromise;
}

export function createChatTransport(pageOrigin: string) {
  return new TextStreamChatTransport({
    api: "/api/chat",
    fetch: async (input, init) => {
      const sid = await getOrCreateSession(pageOrigin);
      const headers = new Headers(init?.headers);
      headers.set("x-session-id", sid);
      return globalThis.fetch(input, { ...init, headers });
    },
  });
}
