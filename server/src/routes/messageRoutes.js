import { Router } from "express";
import {
  createMessage,
  getMessages,
  deleteMessage,
} from "../controllers/messageController.js";

const router = Router();

router.post("/create", createMessage);
router.get("/", getMessages);
router.delete("/:id", deleteMessage);

export default router;
