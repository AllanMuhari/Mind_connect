import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/authRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello Allan</h1>");
// });
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/groups", groupRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
