import { Server } from "socket.io";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    console.log("Starting WebSocket server...");
    
    const io = new Server(res.socket.server, {
      path: "/api/socket",
      cors: {
        origin: "*",
      },
    });

    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);

      socket.on("sendMessage", (message) => {
        io.emit("receiveMessage", message);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });

    res.socket.server.io = io;
  }

  res.end();
}
