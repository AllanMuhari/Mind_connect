import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createMessage = async (req, res) => {
  try {
    const { receiverId, content } = req.body;
    const message = await prisma.message.create({
      data: {
        senderId: req.user.userId,
        receiverId,
        content,
      },
    });
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: "Failed to create message" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        OR: [{ senderId: req.user.userId }, { receiverId: req.user.userId }],
      },
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to get messages" });
  }
};

export const getUnreadMessagesCount = async (req, res) => {
  try {
    const unreadCount = await prisma.message.count({
      where: {
        receiverId: req.user.userId,
        isRead: false,
      },
    });
    res.json({ unreadCount });
  } catch (error) {
    res.status(500).json({ error: "Failed to get unread messages count" });
  }
};

export const markMessagesAsRead = async (req, res) => {
  try {
    await prisma.message.updateMany({
      where: {
        receiverId: req.user.userId,
        isRead: false,
      },
      data: { isRead: true },
    });
    res.json({ message: "Marked messages as read" });
  } catch (error) {
    res.status(500).json({ error: "Failed to mark messages as read" });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    await prisma.message.deleteMany({
      where: {
        OR: [{ senderId: req.user.userId }, { receiverId: req.user.userId }],
      },
    });
    res.json({ message: "Deleted messages" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete messages" });
  }
};
