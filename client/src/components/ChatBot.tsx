import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi! 👋 I'm Rohit's portfolio assistant. Ask me anything about his skills, projects, experience, or how to get in touch!",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    const userMsg: Message = { id: Date.now(), text, sender: "user" };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsTyping(true);

    const botId = Date.now() + 1;

    try {
      // Only send last 6 messages to keep context lean
      const apiMessages = updatedMessages.slice(-6).map(m => ({
        role: m.sender === "bot" ? "assistant" : "user",
        content: m.text
      }));

      const response = await fetch('/api/chat', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages })
      });

      if (!response.ok || !response.body) throw new Error("Failed to fetch");

      setIsTyping(false);
      // Add empty bot message that we'll stream into
      setMessages(prev => [...prev, { id: botId, text: "", sender: "bot" }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith("data: ")) continue;
          const data = trimmed.slice(6);
          if (data === "[DONE]") continue;
          try {
            const parsed = JSON.parse(data);
            if (parsed.error) {
              setMessages(prev => prev.map(m => m.id === botId ? { ...m, text: parsed.error } : m));
              return;
            }
            if (parsed.content) {
              setMessages(prev => prev.map(m =>
                m.id === botId ? { ...m, text: m.text + parsed.content } : m
              ));
            }
          } catch {}
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setIsTyping(false);
      setMessages(prev => [...prev, { id: botId, text: "Sorry, I'm having trouble connecting to the server.", sender: "bot" }]);
    }
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setInput("");
    sendMessage(trimmed);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 9999 }}>
      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: 72,
            right: 0,
            width: 380,
            height: 520,
            borderRadius: 20,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            boxShadow: "0 25px 60px -12px rgba(139, 92, 246, 0.35), 0 0 40px rgba(99, 102, 241, 0.15)",
            background: "var(--chat-bg, rgba(15, 15, 20, 0.95))",
            backdropFilter: "blur(24px)",
            animation: "chatOpen 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="dark:bg-[rgba(15,15,20,0.95)] bg-[rgba(255,255,255,0.97)]"
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid rgba(139, 92, 246, 0.15)",
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.08) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
                  animation: "float 3s ease-in-out infinite",
                }}
              >
                <Bot style={{ width: 22, height: 22, color: "white" }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }} className="text-foreground">
                  Rohit's AI Assistant
                </div>
                <div style={{ fontSize: 12, display: "flex", alignItems: "center", gap: 4 }} className="text-muted-foreground">
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 8px #22c55e" }} />
                  Online now
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
                background: "transparent",
              }}
              className="hover:bg-destructive/15 text-muted-foreground hover:text-destructive"
            >
              <X style={{ width: 18, height: 18 }} />
            </button>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 8,
                  flexDirection: msg.sender === "user" ? "row-reverse" : "row",
                  animation: "msgAppear 0.3s ease-out",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: msg.sender === "bot"
                      ? "linear-gradient(135deg, #8b5cf6, #6366f1)"
                      : "linear-gradient(135deg, #3b82f6, #2563eb)",
                    boxShadow: msg.sender === "bot"
                      ? "0 0 12px rgba(139, 92, 246, 0.3)"
                      : "0 0 12px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  {msg.sender === "bot" ? (
                    <Bot style={{ width: 16, height: 16, color: "white" }} />
                  ) : (
                    <User style={{ width: 16, height: 16, color: "white" }} />
                  )}
                </div>

                {/* Bubble */}
                <div
                  style={{
                    maxWidth: "78%",
                    padding: "10px 14px",
                    fontSize: 13.5,
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                    borderRadius: msg.sender === "bot" ? "18px 18px 18px 4px" : "18px 18px 4px 18px",
                    background: msg.sender === "bot"
                      ? "linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(99, 102, 241, 0.08))"
                      : "linear-gradient(135deg, #8b5cf6, #6366f1)",
                    color: msg.sender === "user" ? "white" : undefined,
                    border: msg.sender === "bot" ? "1px solid rgba(139, 92, 246, 0.15)" : "none",
                    boxShadow: msg.sender === "user"
                      ? "0 4px 15px rgba(139, 92, 246, 0.3)"
                      : "none",
                  }}
                  className={msg.sender === "bot" ? "text-foreground" : ""}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8, animation: "msgAppear 0.3s ease-out" }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                    boxShadow: "0 0 12px rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <Bot style={{ width: 16, height: 16, color: "white" }} />
                </div>
                <div
                  style={{
                    padding: "12px 18px",
                    borderRadius: "18px 18px 18px 4px",
                    background: "linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(99, 102, 241, 0.08))",
                    border: "1px solid rgba(139, 92, 246, 0.15)",
                    display: "flex",
                    gap: 5,
                    alignItems: "center",
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#8b5cf6", animation: "typingDot 1.4s infinite", animationDelay: "0s" }} />
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#8b5cf6", animation: "typingDot 1.4s infinite", animationDelay: "0.2s" }} />
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#8b5cf6", animation: "typingDot 1.4s infinite", animationDelay: "0.4s" }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div style={{ padding: "0 16px 8px", display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Skills", "Projects", "Experience", "Contact"].map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 500,
                    border: "1px solid rgba(139, 92, 246, 0.3)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    background: "rgba(139, 92, 246, 0.08)",
                  }}
                  className="text-foreground hover:bg-[rgba(139,92,246,0.2)]"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div
            style={{
              padding: "12px 16px",
              borderTop: "1px solid rgba(139, 92, 246, 0.12)",
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(139, 92, 246, 0.03)",
            }}
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                borderRadius: 24,
                fontSize: 13.5,
                border: "1px solid rgba(139, 92, 246, 0.2)",
                padding: "10px 16px",
                background: "transparent",
                transition: "border-color 0.3s",
              }}
              className="focus:border-[#8b5cf6] placeholder:text-muted-foreground/60"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "none",
                cursor: input.trim() ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: input.trim()
                  ? "linear-gradient(135deg, #8b5cf6, #6366f1)"
                  : "rgba(139, 92, 246, 0.15)",
                transition: "all 0.3s",
                boxShadow: input.trim() ? "0 4px 15px rgba(139, 92, 246, 0.4)" : "none",
                flexShrink: 0,
              }}
            >
              <Send style={{ width: 18, height: 18, color: "white", opacity: input.trim() ? 1 : 0.4 }} />
            </button>
          </div>
        </div>
      )}

      {/* Full-Body Animated Robot */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: "pointer",
          position: "relative",
          width: 60,
          height: 88,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          filter: "drop-shadow(0 5px 14px rgba(139, 92, 246, 0.4))",
          transition: "all 0.3s",
          animation: isOpen ? "none" : "chatBtnFloat 3s ease-in-out infinite",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.08)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        data-testid="button-chatbot"
      >
        {/* Glow platform */}
        {!isOpen && (
          <div style={{
            position: "absolute",
            bottom: -4,
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 8,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(139,92,246,0.4) 0%, transparent 70%)",
            animation: "platformGlow 3s ease-in-out infinite",
          }} />
        )}

        {isOpen ? (
          <div style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 30px rgba(139, 92, 246, 0.5)",
          }}>
            <X style={{ width: 26, height: 26, color: "white" }} />
          </div>
        ) : (
          <svg width="60" height="88" viewBox="0 0 180 260" style={{ overflow: "visible" }}>
            {/* === ANTENNA === */}
            <g style={{ animation: "antennaWiggle 2s ease-in-out infinite", transformOrigin: "90px 38px" }}>
              <line x1="90" y1="38" x2="90" y2="10" stroke="#c4b5fd" strokeWidth="4" strokeLinecap="round" />
              <circle cx="90" cy="8" r="7" fill="#a78bfa" style={{ animation: "antennaBlink 1.5s ease-in-out infinite" }}>
                <animate attributeName="r" values="7;9;7" dur="1.5s" repeatCount="indefinite" />
              </circle>
              {/* Antenna glow */}
              <circle cx="90" cy="8" r="12" fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.3" style={{ animation: "chatRipple 2s ease-out infinite" }} />
            </g>

            {/* === HEAD === */}
            <g style={{ animation: "robotBreathe 3s ease-in-out infinite", transformOrigin: "90px 65px" }}>
              <rect x="40" y="38" width="100" height="65" rx="22" ry="22" fill="white" fillOpacity="0.95" stroke="#c4b5fd" strokeWidth="2" />

              {/* Screen visor */}
              <rect x="52" y="48" width="76" height="35" rx="12" fill="#ede9fe" opacity="0.6" />

              {/* Eyes with look animation */}
              <g style={{ animation: "eyeLook 5s ease-in-out infinite" }}>
                {/* Left eye */}
                <circle cx="72" cy="65" r="12" fill="#8b5cf6" />
                <circle cx="72" cy="65" r="7" fill="#4f46e5" />
                <circle cx="69" cy="62" r="3" fill="white" opacity="0.9" />
                <rect x="60" y="58" width="24" height="14" rx="7" fill="white" fillOpacity="0.95" style={{ animation: "blink 4s ease-in-out infinite" }} />

                {/* Right eye */}
                <circle cx="108" cy="65" r="12" fill="#8b5cf6" />
                <circle cx="108" cy="65" r="7" fill="#4f46e5" />
                <circle cx="105" cy="62" r="3" fill="white" opacity="0.9" />
                <rect x="96" y="58" width="24" height="14" rx="7" fill="white" fillOpacity="0.95" style={{ animation: "blink 4s ease-in-out infinite" }} />
              </g>

              {/* Mouth */}
              <path d="M72 86 Q90 96 108 86" stroke="#8b5cf6" strokeWidth="3.5" fill="none" strokeLinecap="round">
                <animate attributeName="d" values="M72 86 Q90 96 108 86;M72 86 Q90 90 108 86;M72 86 Q90 96 108 86" dur="2s" repeatCount="indefinite" />
              </path>

              {/* Cheek blush */}
              <circle cx="55" cy="82" r="7" fill="#c4b5fd" opacity="0.35" />
              <circle cx="125" cy="82" r="7" fill="#c4b5fd" opacity="0.35" />

              {/* Ears */}
              <rect x="26" y="55" width="14" height="22" rx="7" fill="#a78bfa" opacity="0.85" style={{ animation: "earWiggle 3s ease-in-out infinite" }} />
              <rect x="140" y="55" width="14" height="22" rx="7" fill="#a78bfa" opacity="0.85" style={{ animation: "earWiggle 3s ease-in-out 0.5s infinite" }} />
            </g>

            {/* === NECK === */}
            <rect x="80" y="103" width="20" height="12" rx="4" fill="#c4b5fd" opacity="0.7" />

            {/* === BODY === */}
            <g style={{ animation: "bodyBounce 3s ease-in-out infinite", transformOrigin: "90px 155px" }}>
              <rect x="48" y="115" width="84" height="70" rx="18" ry="18" fill="white" fillOpacity="0.95" stroke="#c4b5fd" strokeWidth="2" />

              {/* Chest panel */}
              <rect x="62" y="125" width="56" height="30" rx="10" fill="#ede9fe" opacity="0.5" />

              {/* Heart core */}
              <circle cx="90" cy="140" r="10" fill="#8b5cf6" opacity="0.8" style={{ animation: "heartBeat 1.2s ease-in-out infinite" }}>
                <animate attributeName="r" values="10;12;10" dur="1.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="90" cy="140" r="5" fill="#6366f1" />
              <circle cx="88" cy="138" r="2" fill="white" opacity="0.7" />

              {/* Heart glow ring */}
              <circle cx="90" cy="140" r="15" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" style={{ animation: "chatRipple 1.5s ease-out infinite" }} />

              {/* Belt */}
              <rect x="55" y="162" width="70" height="8" rx="4" fill="#c4b5fd" opacity="0.5" />
              <circle cx="90" cy="166" r="5" fill="#a78bfa" opacity="0.8" />
            </g>

            {/* === ARMS === */}
            {/* Left arm */}
            <g style={{ animation: "leftArmWave 2.5s ease-in-out infinite", transformOrigin: "48px 125px" }}>
              <rect x="22" y="120" width="26" height="52" rx="13" fill="white" fillOpacity="0.9" stroke="#c4b5fd" strokeWidth="2" />
              {/* Hand */}
              <circle cx="35" cy="178" r="10" fill="white" fillOpacity="0.9" stroke="#c4b5fd" strokeWidth="2" />
              <circle cx="35" cy="178" r="4" fill="#c4b5fd" opacity="0.4" />
            </g>

            {/* Right arm */}
            <g style={{ animation: "rightArmWave 2.5s ease-in-out 0.3s infinite", transformOrigin: "132px 125px" }}>
              <rect x="132" y="120" width="26" height="52" rx="13" fill="white" fillOpacity="0.9" stroke="#c4b5fd" strokeWidth="2" />
              {/* Hand */}
              <circle cx="145" cy="178" r="10" fill="white" fillOpacity="0.9" stroke="#c4b5fd" strokeWidth="2" />
              <circle cx="145" cy="178" r="4" fill="#c4b5fd" opacity="0.4" />
            </g>

            {/* === LEGS === */}
            {/* Left leg */}
            <g style={{ animation: "leftLegTap 1.5s ease-in-out infinite" }}>
              <rect x="60" y="185" width="24" height="42" rx="12" fill="white" fillOpacity="0.9" stroke="#c4b5fd" strokeWidth="2" />
              {/* Foot */}
              <ellipse cx="72" cy="232" rx="16" ry="8" fill="white" fillOpacity="0.9" stroke="#c4b5fd" strokeWidth="2" />
            </g>

            {/* Right leg */}
            <g style={{ animation: "rightLegTap 1.5s ease-in-out 0.75s infinite" }}>
              <rect x="96" y="185" width="24" height="42" rx="12" fill="white" fillOpacity="0.9" stroke="#c4b5fd" strokeWidth="2" />
              {/* Foot */}
              <ellipse cx="108" cy="232" rx="16" ry="8" fill="white" fillOpacity="0.9" stroke="#c4b5fd" strokeWidth="2" />
            </g>

            {/* Sparkles around bot */}
            <circle cx="20" cy="30" r="3" fill="#a78bfa" style={{ animation: "sparkle 2s ease-in-out infinite" }} />
            <circle cx="160" cy="25" r="2.5" fill="#818cf8" style={{ animation: "sparkle 2s ease-in-out 0.5s infinite" }} />
            <circle cx="15" cy="140" r="2" fill="#c4b5fd" style={{ animation: "sparkle 2s ease-in-out 1s infinite" }} />
            <circle cx="165" cy="150" r="2.5" fill="#a78bfa" style={{ animation: "sparkle 2s ease-in-out 1.5s infinite" }} />
          </svg>
        )}

        {/* Tooltip label */}
        {!isOpen && (
          <div
            style={{
              position: "absolute",
              top: -10,
              right: -10,
              whiteSpace: "nowrap",
              padding: "5px 12px",
              borderRadius: 12,
              fontSize: 11,
              fontWeight: 600,
              background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
              color: "white",
              boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)",
              animation: "chatTooltip 0.5s ease-out 2s both",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Sparkles style={{ width: 11, height: 11 }} />
            Chat with me!
          </div>
        )}
      </div>

      {/* Inline styles for animations */}
      <style>{`
        @keyframes chatOpen {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes msgAppear {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes chatPulse {
          0%, 100% { box-shadow: 0 8px 30px rgba(139,92,246,0.5), 0 0 0 0 rgba(139,92,246,0.4); }
          50% { box-shadow: 0 8px 30px rgba(139,92,246,0.5), 0 0 0 14px rgba(139,92,246,0); }
        }
        @keyframes chatRipple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes chatTooltip {
          0% { opacity: 0; transform: translateY(5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes chatBtnFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes blink {
          0%, 42%, 44%, 100% { transform: scaleY(0); }
          43% { transform: scaleY(1); }
        }
        @keyframes robotBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.015); }
        }
        @keyframes eyeLook {
          0%, 40%, 100% { transform: translateX(0); }
          45%, 55% { transform: translateX(3px); }
          60%, 70% { transform: translateX(-3px); }
        }
        @keyframes antennaWiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(8deg); }
          75% { transform: rotate(-8deg); }
        }
        @keyframes antennaBlink {
          0%, 100% { fill: #a78bfa; }
          50% { fill: #e879f9; filter: drop-shadow(0 0 6px #e879f9); }
        }
        @keyframes earWiggle {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.2); }
        }
        @keyframes heartBeat {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; filter: drop-shadow(0 0 8px #8b5cf6); }
        }
        @keyframes bodyBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes leftArmWave {
          0%, 100% { transform: rotate(0deg); }
          30% { transform: rotate(-15deg); }
          60% { transform: rotate(5deg); }
        }
        @keyframes rightArmWave {
          0%, 100% { transform: rotate(0deg); }
          30% { transform: rotate(15deg); }
          60% { transform: rotate(-5deg); }
        }
        @keyframes leftLegTap {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes rightLegTap {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); filter: drop-shadow(0 0 4px #a78bfa); }
        }
        @keyframes platformGlow {
          0%, 100% { opacity: 0.4; transform: translateX(-50%) scaleX(1); }
          50% { opacity: 0.7; transform: translateX(-50%) scaleX(1.2); }
        }
      `}</style>
    </div>
  );
}
