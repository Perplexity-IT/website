"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { EMAIL } from "../lib/site";
import {
  GREETING,
  QUICK_REPLIES,
  getBotReply,
} from "../lib/chatbot-knowledge";

// Floating demo chatbot, bottom-left (the sticky "Book a call" pill is
// bottom-right). Rule-based: answers from lib/chatbot-knowledge.js — zero
// cost, no API key, no server. Lead capture composes a prefilled email via
// the visitor's own mail app, the same pattern as ContactForm.
const TYPING_MS = 600;
const CANCEL_WORDS = ["cancel", "stop", "never mind", "nevermind", "forget it"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SendIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </svg>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [chips, setChips] = useState(QUICK_REPLIES);
  // Lead capture state: null, or { step: "name" | "email" | "need", data: {} }
  const [lead, setLead] = useState(null);

  const inputRef = useRef(null);
  const launcherRef = useRef(null);
  const messagesRef = useRef(null);
  const timerRef = useRef(null);
  const greetedRef = useRef(false);

  const close = useCallback(() => {
    setOpen(false);
    // Return focus to the launcher for keyboard users.
    setTimeout(() => launcherRef.current?.focus(), 0);
  }, []);

  const toggle = useCallback(() => {
    if (open) {
      close();
      return;
    }
    setOpen(true);
    if (!greetedRef.current) {
      greetedRef.current = true;
      setMessages([{ from: "bot", text: GREETING }]);
      setChips(QUICK_REPLIES);
    }
  }, [open, close]);

  // Esc closes the panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Focus the input when the panel opens.
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(t);
    }
  }, [open ]);

  // Keep the latest message in view.
  useEffect(() => {
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, open]);

  // Clear any pending reply timer on unmount.
  useEffect(() => () => clearTimeout(timerRef.current), []);

  function pushBot(reply) {
    setMessages((prev) => [...prev, { from: "bot", text: reply.text }]);
    setChips(reply.chips || []);
    if (reply.lead) setLead({ step: "name", data: {} });
  }

  // One step of the lead-capture flow. Returns the bot's reply text, or
  // null when the flow hands back to normal matching.
  function leadStep(text) {
    const lower = text.toLowerCase().trim();
    if (CANCEL_WORDS.some((w) => lower === w || lower.startsWith(`${w} `))) {
      setLead(null);
      return {
        text: `No problem — I'll leave it there. You can always email Nabin directly at ${EMAIL} or book a call anytime.`,
        chips: [QUICK_REPLIES[0]],
      };
    }

    if (lead.step === "name") {
      const name = text.trim();
      if (name.length < 2) {
        return { text: "Could you tell me your name? Just a first name is fine." };
      }
      setLead({ step: "email", data: { name } });
      const first = name.split(" ")[0];
      return { text: `Nice to meet you, ${first}! What's the best email to reach you at?` };
    }

    if (lead.step === "email") {
      const email = text.trim();
      if (!EMAIL_RE.test(email)) {
        return { text: "That doesn't look like an email address — could you double-check it?" };
      }
      setLead({ step: "need", data: { ...lead.data, email } });
      return {
        text: "Thanks! And what do you need help with — a website, SEO, ads, IT support, an AI chatbot, or a phone receptionist? A sentence or two is fine.",
      };
    }

    // step === "need": compose the lead email, same mailto pattern as ContactForm.
    const { name, email } = lead.data;
    const subject = `New inquiry via website chatbot — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "What they need:",
      text.trim(),
      "",
      "(Sent from the Perplexity IT website chatbot.)",
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setLead(null);
    const first = name.split(" ")[0];
    return {
      text: `Thanks, ${first}! Your email app should have opened with everything prefilled — just hit send and Nabin will reply personally, usually the same day. Anything else I can help with?`,
      chips: [QUICK_REPLIES[0]],
    };
  }

  function send(raw) {
    const text = String(raw ?? "").trim();
    if (!text || typing) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setChips([]);
    setTyping(true);

    timerRef.current = setTimeout(() => {
      setTyping(false);
      if (lead) {
        pushBot(leadStep(text));
      } else {
        pushBot(getBotReply(text));
      }
    }, TYPING_MS);
  }

  function onSubmit(e) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="chat-widget">
      {open && (
        <div
          className="chat-panel"
          role="dialog"
          aria-label="Perplexity IT assistant chat"
          aria-modal="false"
        >
          <div className="chat-header">
            <span className="chat-header-icon" aria-hidden="true">
              <Icon name="chat" size={20} />
            </span>
            <div className="chat-header-text">
              <strong>Perplexity IT Assistant</strong>
              <span>Demo chatbot · replies instantly</span>
            </div>
            <button
              type="button"
              className="chat-close"
              aria-label="Close chat"
              onClick={close}
            >
              &times;
            </button>
          </div>

          <div className="chat-messages" ref={messagesRef} aria-live="polite">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`chat-msg ${m.from === "bot" ? "chat-msg-bot" : "chat-msg-user"}`}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div
                className="chat-msg chat-msg-bot chat-typing"
                aria-label="Assistant is typing"
              >
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          {chips.length > 0 && !typing && (
            <div className="chat-chips">
              {chips.map((c) => (
                <button key={c} type="button" onClick={() => send(c)}>
                  {c}
                </button>
              ))}
            </div>
          )}

          <form className="chat-input-row" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="chat-input">
              Type your message
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, pricing…"
              autoComplete="off"
            />
            <button type="submit" aria-label="Send message">
              <SendIcon />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        ref={launcherRef}
        className="chat-launcher"
        onClick={toggle}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat with the Perplexity IT assistant"}
      >
        {open ? (
          <span className="chat-launcher-x" aria-hidden="true">
            &times;
          </span>
        ) : (
          <>
            <Icon name="chat" size={22} />
            <span className="chat-launcher-label">AI assistant</span>
          </>
        )}
      </button>
    </div>
  );
}
