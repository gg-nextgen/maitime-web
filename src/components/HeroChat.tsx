"use client";

import { useChat } from "@ai-sdk/react";
import type { UIMessage } from "ai";
import { useState, useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { createChatTransport } from "@/lib/chat-transport";

const welcomeMessage: UIMessage = {
  id: "welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Ciao! Sono MAITIME, il tuo assistente AI. Chiedimi qualsiasi cosa sulla gestione della tua azienda, o scopri come posso aiutarti.",
    },
  ],
};

export default function HeroChat() {
  const [inputValue, setInputValue] = useState("");
  const [typingText, setTypingText] = useState("");
  const [showTyping, setShowTyping] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const transport = useMemo(() => createChatTransport("hero"), []);

  const { messages, sendMessage, status, error } = useChat({
    transport,
    messages: [welcomeMessage],
  });

  const isLoading = status === "streaming" || status === "submitted";

  // Debug logs
  useEffect(() => {
    console.log("[HERO CHAT] status:", status);
    console.log("[HERO CHAT] messages count:", messages.length);
    if (error) {
      console.error("[HERO CHAT] error:", error);
    }
  }, [status, messages, error]);

  // Typing animation for the welcome message
  const fullText =
    "Ciao! Sono MAITIME, il tuo assistente AI. Chiedimi qualsiasi cosa sulla gestione della tua azienda, o scopri come posso aiutarti.";

  useEffect(() => {
    if (!showTyping) return;
    let i = 0;
    const timer = setInterval(() => {
      setTypingText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(timer);
        setShowTyping(false);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [showTyping]);

  // Auto-scroll messages inside the chat container (not the page)
  const chatScrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages]);

  function getMessageText(message: (typeof messages)[number]): string {
    return message.parts
      .filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = inputValue.trim();
    console.log("[HERO CHAT] handleSubmit called, text:", text, "isLoading:", isLoading);
    if (!text || isLoading) return;
    setInputValue("");
    setShowTyping(false);
    console.log("[HERO CHAT] calling sendMessage with:", text);
    sendMessage({ text });
  }

  // Suggested quick actions
  const suggestions = [
    "Come funziona MAITIME?",
    "Quanto costa?",
    "Prenota una demo",
  ];

  function handleSuggestion(text: string) {
    setShowTyping(false);
    sendMessage({ text });
  }

  const chatContent = () => {
    return (
      <div
        className="flex h-[400px] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#000030]/80 shadow-2xl backdrop-blur-xl sm:h-[420px]"
        style={{
          boxShadow: "0 0 40px rgba(255,0,255,0.15), 0 0 80px rgba(0,0,70,0.3)",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <div className="relative">
            <Image
              src="/assets/MAITIME_Logo_Header_Mobile_Dark.png"
              alt="MAITIME"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#000030] bg-green-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">MAITIME AI</p>
            <p className="text-[11px] text-green-400/80">Online ora</p>
          </div>
        </div>

        {/* Messages */}
        <div ref={chatScrollRef} className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-3">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-[#5B21B6] to-[#FF00FF] text-white"
                      : "border border-white/5 bg-white/[0.06] text-white/90"
                  }`}
                >
                  {index === 0 && showTyping ? (
                    <>
                      {typingText}
                      <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-[#FF00FF]" />
                    </>
                  ) : message.role === "assistant" ? (
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                        strong: ({ children }) => <strong className="font-bold text-[#FF00FF]">{children}</strong>,
                        ul: ({ children }) => <ul className="mb-2 ml-4 list-disc last:mb-0">{children}</ul>,
                        ol: ({ children }) => <ol className="mb-2 ml-4 list-decimal last:mb-0">{children}</ol>,
                        li: ({ children }) => <li className="mb-0.5">{children}</li>,
                        a: ({ href, children }) => (
                          <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#FF00FF] underline underline-offset-2 hover:text-[#FF00FF]/80">
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {getMessageText(message)}
                    </ReactMarkdown>
                  ) : (
                    getMessageText(message)
                  )}
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="rounded-2xl border border-white/5 bg-white/[0.06] px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[#FF00FF]/60" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[#FF00FF]/60" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[#FF00FF]/60" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Suggestions - only show when there's just the welcome message */}
        {messages.length <= 1 && !isLoading && (
          <div className="flex flex-wrap gap-2 border-t border-white/5 px-4 py-2.5">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSuggestion(s)}
                className="rounded-full border border-[#FF00FF]/30 bg-[#FF00FF]/5 px-3.5 py-1.5 text-xs text-[#FF00FF] transition-all hover:border-[#FF00FF]/60 hover:bg-[#FF00FF]/10"
              >
                {s}
              </button>
            ))}
          </div>
        )}

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
            className="flex-1 rounded-xl bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:bg-white/[0.1] focus:ring-1 focus:ring-[#FF00FF]/50"
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#5B21B6] to-[#FF00FF] text-white transition-all hover:shadow-lg hover:shadow-[#FF00FF]/20 disabled:opacity-30"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex justify-center px-4"
      >
        {chatContent()}
      </motion.div>
    </div>
  );
}
