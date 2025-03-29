import { verifyAuth } from "./middleware/authMiddleware";

export function middleware(req) {
  return verifyAuth(req); // Calls authentication middleware
}

// Specify routes that should be protected
export const config = {
  matcher: ["/dashboard/:path*", "/messages/:path*"], // Protects /dashboard and /messages pages
};
