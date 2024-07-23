import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCounselors = async (req, res) => {
  try {
    const counselors = await prisma.counselor.findMany({
      where: { approved: true },
      include: { user: true },
    });
    res.json(counselors);
  } catch (error) {
    console.error("Error fetching counselors", error);
    res.status(500).json({ error: "Failed to fetch counselors" });
  }
};

export const getBookedSessions = async (req, res) => {
  const { counselorId } = req.params;
  try {
    const sessions = await prisma.bookedSession.findMany({
      where: { counselorId },
      include: { user: true },
    });
    res.json(sessions);
  } catch (error) {
    console.error("Error fetching booked sessions", error);
    res.status(500).json({ error: "Failed to fetch booked sessions" });
  }
};

export const bookSession = async (req, res) => {
  const { userId, counselorId, sessionDate } = req.body;
  try {
    const newSession = await prisma.bookedSession.create({
      data: {
        userId,
        counselorId,
        sessionDate: new Date(sessionDate),
      },
    });
    res.status(201).json(newSession);
  } catch (error) {
    console.error("Error booking session", error);
    res.status(500).json({ error: "Failed to book session" });
  }
};

export const updateCounselorProfile = async (req, res) => {
  const { phoneNumber, email, experience, image } = req.body;
  const { userId } = req.user;

  try {
    const updatedCounselor = await prisma.counselor.update({
      where: { userId },
      data: { phoneNumber, email, experience, image },
    });

    res.status(200).json(updatedCounselor);
  } catch (error) {
    console.error("Error updating counselor profile", error);
    res.status(500).json({ error: "Failed to update counselor profile" });
  }
};


export const declineCounselor = async (req, res) => {
  const { counselorId } = req.body;

  try {
    await prisma.counselor.delete({
      where: { userId: counselorId },
    });
    res.status(200).json({ message: "Counselor declined successfully" });
  } catch (error) {
    console.error("Error declining counselor", error);
    res.status(500).json({ error: "Failed to decline counselor" });
  }
};
export const getPendingCounselors = async (req, res) => {
  try {
    const counselors = await prisma.counselor.findMany({
      where: { approved: false },
      include: { user: true },
    });
    res.json(counselors);
  } catch (error) {
    console.error("Error fetching pending counselors", error);
    res.status(500).json({ error: "Failed to fetch pending counselors" });
  }
};

export const approveCounselor = async (req, res) => {
  const { counselorId } = req.params;

  try {
    const updatedCounselor = await prisma.counselor.update({
      where: { userId: counselorId },
      data: { approved: true },
    });
    res.status(200).json(updatedCounselor);
  } catch (error) {
    console.error("Error approving counselor", error);
    res.status(500).json({ error: "Failed to approve counselor" });
  }
};

   