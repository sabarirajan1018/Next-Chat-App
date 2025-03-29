"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { useChat } from "@/context/ChatContext";
import MessagesList from "./MessagesList";
import MessageInput from "@/components/MessageInput";

export default function MessagesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  const { messages, fetchMessages, sendMessage } = useChat();
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSend = () => {
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="p-4 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold">Chat Messages</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <MessagesList messages={messages} />
      </div>

      <div className="p-4 bg-gray-800 shadow-md">
        <MessageInput value={newMessage} onChange={setNewMessage} onSend={handleSend} />
      </div>
    </div>
  );
};