import { Router } from "express";

import {
  createGroup,
  getGroups,
  getGroupById,
  updateGroup,
  deleteGroup,
} from "../controllers/groupController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/create", authMiddleware ,createGroup);
router.get("/", authMiddleware,getGroups);
router.get("/:id",authMiddleware, getGroupById);
router.put("/:id", authMiddleware,updateGroup);
router.delete("/:id",authMiddleware, deleteGroup);

export default router;
