import { useState, useRef, useEffect } from "react";
import { PaperAirplaneIcon, SparklesIcon } from "@heroicons/react/24/solid";

const starterPrompts = [
  "What’s a good intro hook for my vlog?",
  "Suggest a script outline for a 60s fitness reel.",
  "What viral audio can I use for my unboxing?",
];

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi! I’m your AI content mentor. Ask me anything about content, scripts, titles, or trends!" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Simulate AI response (replace with real API call)
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          from: "bot",
          text: `✨ Here’s an idea for "${input}":\n- [AI-generated suggestion goes here]`,
        },
      ]);
    }, 1200);
  };

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-800/80 via-pink-700/70 to-yellow-400/70 rounded-3xl shadow-2xl p-8 flex flex-col h-[600px]">
      <div className="flex items-center gap-3 mb-6">
        <SparklesIcon className="h-8 w-8 text-yellow-300 animate-bounce" />
        <h2 className="text-3xl font-bold text-white">Content Mentor Chatbot</h2>
      </div>
      <div className="flex-1 overflow-y-auto bg-white/10 rounded-xl p-4 mb-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] px-4 py-2 rounded-2xl shadow ${
                msg.from === "user"
                  ? "bg-gradient-to-r from-pink-500 to-yellow-400 text-white"
                  : "bg-white/30 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="flex gap-2 mb-2">
        {starterPrompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => setInput(prompt)}
            className="px-3 py-1 bg-white/20 rounded-full text-white text-sm hover:bg-white/40 transition"
          >
            {prompt}
          </button>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-1 p-3 rounded-l-2xl bg-white/20 text-white focus:outline-none"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="p-3 rounded-r-2xl bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold hover:scale-105 transition"
        >
          <PaperAirplaneIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
// This component implements a chatbot interface where users can ask questions about content creation.
// It uses local state to manage messages and input, and simulates AI responses.