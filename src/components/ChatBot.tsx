"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import type { UIMessage } from "ai";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const transport = new TextStreamChatTransport({ api: "/api/chat" });

const welcomeMessage: UIMessage = {
  id: "welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Ciao! Sono l'assistente AI di MAITIME. Come posso aiutarti? Puoi chiedermi informazioni sulla piattaforma o consigli per la gestione della tua azienda.",
    },
  ],
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport,
    messages: [welcomeMessage],
  });

  const isLoading = status === "streaming" || status === "submitted";

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  function getMessageText(message: (typeof messages)[number]): string {
    return message.parts
      .filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text || isLoading) return;
    setInputValue("");
    sendMessage({ text });
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-gradient-to-r from-[#000062] to-[#FF00FF] shadow-lg transition-transform hover:scale-110"
        aria-label={isOpen ? "Chiudi chat" : "Apri chat MAITIME"}
      >
        {isOpen ? (
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[380px] flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#000046] shadow-2xl sm:w-[420px]">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-[#000046] to-[#000062] px-4 py-3">
            <Image
              src="/assets/MAITIME_Logo_Header_Mobile_Dark.png"
              alt="MAITIME"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <div>
              <p className="text-sm font-bold text-white">MAITIME AI</p>
              <p className="text-xs text-white/50">
                Assistente per la tua azienda
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-[#000062] to-[#FF00FF] text-white"
                        : "bg-white/10 text-white/90"
                    }`}
                  >
                    {getMessageText(message)}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-xl bg-white/10 px-4 py-2.5 text-sm text-white/50">
                    <span className="animate-pulse">Sto scrivendo...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 border-t border-white/10 p-3"
          >
            <input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Scrivi un messaggio..."
              className="flex-1 rounded-lg bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:ring-1 focus:ring-[#FF00FF]"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="rounded-lg bg-gradient-to-r from-[#000062] to-[#FF00FF] px-4 py-2.5 text-sm font-bold text-white transition-opacity disabled:opacity-40"
            >
              Invia
            </button>
          </form>
        </div>
      )}
    </>
  );
}
