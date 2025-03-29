import { connectDB } from "@/lib/mongodb";
import Message from "@/models/Message";
import Chat from "@/models/Chat";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { sender, chatId, content } = await req.json();
    await connectDB();

    const message = new Message({ sender, chat: chatId, content });
    await message.save();

    await Chat.findByIdAndUpdate(chatId, { $push: { messages: message._id } });

    return NextResponse.json({ message: "Message sent", data: message }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
