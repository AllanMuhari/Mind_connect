import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createNotification = async (req, res) => {
  try {
    const { message } = req.body;
    const notification = await prisma.notification.create({
      data: {
        userId: req.user.userId,
        message,
        read: false,
      },
    });
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: "Failed to create notification" });
  }
};

export const getNotifications = async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: { userId: req.user.userId },
    });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Failed to get notifications" });
  }
};

export const markNotificationAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.notification.update({
      where: { id },
      data: { read: true },
    });
    res.json({ message: "Notification marked as read" });
  } catch (error) {
    res.status(500).json({ error: "Failed to mark notification as read" });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.notification.delete({
      where: { id },
    });
    res.json({ message: "Notification deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete notification" });
  }
};

export const updateNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    const notification = await prisma.notification.update({
      where: { id },
      data: { message },
    });
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: "Failed to update notification" });
  }
};
