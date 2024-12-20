import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/authRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";
import resourceRoutes from "./routes/resourceRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

import counselorRoutes from "./routes/counsellorRoutes.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello Allan</h1>");
// });
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/counselors", counselorRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
