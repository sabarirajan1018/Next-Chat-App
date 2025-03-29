import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function verifyAuth(req) {
  const token = req.cookies.get("token")?.value; // Read token from cookies

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login if no token
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
