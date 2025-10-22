import React, { useState } from "react";
import { FiMessageCircle, FiSend } from "react-icons/fi";

const HomeChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [initialized, setInitialized] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);

    if (!initialized && !isOpen) {
      setMessages([
        {
          text: "👋 Hi there! How can we help?",
          sender: "bot",
        },
      ]);
      setInitialized(true);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage = {
        text: "We received your message. Our mod will get back to you soon. Thanks!",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button + Tooltip */}
      <div
        className="fixed bottom-20 left-20 z-50 flex flex-col items-center"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="mb-2 px-2 py-1 bg-black text-white text-sm rounded-md cursor-pointer shadow-lg">
            Need help?
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleOpen}
          className="bg-[#4e5dfe] text-white rounded-full p-4 shadow-lg cursor-pointer"
        >
          <FiMessageCircle size={32} />
        </button>
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-32 left-20 w-80 max-h-96 bg-white shadow-lg rounded-xl flex flex-col overflow-hidden z-50 text-black">
          {/* Header */}
          <div className="bg-[#4e5dfe] text-white px-4 py-2 font-bold flex justify-between items-center">
            <span>Live Chat</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold hover:text-gray-200 transition-none"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-white text-black">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md text-sm max-w-[85%] ${
                  msg.sender === "user"
                    ? "bg-blue-100 self-end text-right text-black"
                    : "bg-gray-200 self-start text-left text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="flex border-t border-gray-300 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 outline-none text-black placeholder-gray-500 bg-white"
            />
            <button
              type="submit"
              className="bg-[#4e5dfe] text-white px-4 flex items-center justify-center"
            >
              <FiSend />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default HomeChat;
