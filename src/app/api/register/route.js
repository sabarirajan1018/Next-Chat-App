import { connectDB } from "@/lib/mongodb";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();
    await connectDB();

    const userExists = await User.findOne({ email });
    if (userExists) return NextResponse.json({ error: "User already exists" }, { status: 400 });

    const newUser = new User({ username, email, password });
    await newUser.save();

    return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
