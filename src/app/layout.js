import { ThemeProvider } from "@/context/ThemeContext";
import { ChatProvider } from "@/context/ChatContext"; // Import Chat Context
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <ThemeProvider>
          <ChatProvider>
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 px-1">{children}</main>
            </div>
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
