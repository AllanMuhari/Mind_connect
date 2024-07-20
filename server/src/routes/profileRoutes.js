import { Router } from "express";
import {
  getProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profileController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/:userId", getProfile);

router.put("/:userId", authMiddleware, updateProfile);

router.delete("/:userId", authMiddleware, deleteProfile);


export default router;
