import express from "express";
import {
  getAllCounselors,
  getBookedSessions,
  bookSession,
  updateCounselorProfile,
  approveCounselor,
  declineCounselor,
  getPendingCounselors,
} from "../controllers/counsellorController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllCounselors);
router.get("/pending", getPendingCounselors);
router.get("/:counselorId/booked-sessions", getBookedSessions);
router.post("/book-session", authMiddleware, bookSession);
router.put("/profile", authMiddleware, updateCounselorProfile);
router.put("/approve/:counselorId", authMiddleware, approveCounselor);
router.post("/decline", authMiddleware, declineCounselor);

export default router;
