"use client";

import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const fetchMessages = () => {
    setMessages(["Hello!", "How are you?", "Welcome to the chat!"]);
  };

  const sendMessage = (message) => {
    setMessages((prev) => [...prev, message]); 
  };

  return (
    <ChatContext.Provider value={{ messages, fetchMessages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
