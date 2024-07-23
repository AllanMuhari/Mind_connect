import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createSession = async (req, res) => {
  try {
    const { conselorId, date, status } = req.body;
    const session = await prisma.session.create({
      data: {
        userId: req.user.id,
        conselorId,
        date,
        status,
      },
    });
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSessions = async (req, res) => {
  try {
    const sessions = await prisma.session.findMany({
      where: {
        userId: req.user.id,
      },
    });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteSession = async (req, res) => {
  try {
    const { sessionId } = req.params;
    await prisma.session.delete({
      where: {
        id: sessionId,
      },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSession = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { conselorId, date, status } = req.body;
    const updatedSession = await prisma.session.update({
      where: {
        id: sessionId,
      },
      data: {
        conselorId,
        date,
        status,
      },
    });
    res.json(updatedSession);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getBookedSessions = async (req, res) => {
  const { id } = req.params;
  try {
    const sessions = await prisma.bookedSession.findMany({
      where: { counsellorId: parseInt(id) },
      include: {
        user: true,
      },
    });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: "Failed to get booked sessions" });
  }
};
