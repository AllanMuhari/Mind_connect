import { Router } from "express";
import {
  createSession,
  getSessions,
  deleteSession,
  updateSession,
} from "../controllers/sessionControllers.js";

const router = Router();

router.post("/create", createSession);
router.get("/", getSessions);
router.delete("/:id", deleteSession);
router.put("/:id", updateSession);

export default router;
