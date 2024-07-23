import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();

router.get("/", async (req, res) => {
  const counselors = await prisma.counselor.findMany({
    include: { user: true },
  });
  res.json(counselors);
});

router.get("/:counselorId/booked-sessions", async (req, res) => {
  const { counselorId } = req.params;
  const sessions = await prisma.bookedSession.findMany({
    where: { counselorId },
    include: { user: true },
  });
  res.json(sessions);
});

router.post("/book-session", async (req, res) => {
  const { userId, counselorId, sessionDate } = req.body;
  const newSession = await prisma.bookedSession.create({
    data: {
      userId,
      counselorId,
      sessionDate: new Date(sessionDate),
    },
  });
  res.status(201).json(newSession);
});

export default router;
