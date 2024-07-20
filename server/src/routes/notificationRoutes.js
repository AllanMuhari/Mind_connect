import { Router } from "express";
import {
  createNotification,
  getNotifications,
  deleteNotification,
  updateNotification,
} from "../controllers/notificationController.js";

const router = Router();

router.post("/create", createNotification);
router.get("/", getNotifications);
router.delete("/:id", deleteNotification);
router.put("/:id", updateNotification);
export default router;
