import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import { app, server } from "./sockets/socket.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { config } from "dotenv";
config();

// middleware
app.use(json()); // to parse the incoming requests with json payloads(from req.body)
app.use(cookieParser()); // to enable usage of our cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/api/test", (req, res) => {
  res.status(200).json("test ok");
});

// connections
connect(
  `mongodb+srv://${process.env.login}@cluster1.tl2glm2.mongodb.net/chat-app?retryWrites=true&w=majority&appName=Cluster1`
)
  .then(() => {
    console.log("connected to database");
    server.listen(8000, () => {
      console.log("server is running on port 8000");
    });
  })
  .catch((error) => {
    console.log(`connection failed: ${error}`);
  });
