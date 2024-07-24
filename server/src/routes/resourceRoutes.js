// import { Router } from "express";
// import {
//   createResource,
//   getResources,
//   deleteResource,
//   updateResource,
// } from "../controllers/resourceController.js";

// const router = Router();

// router.post("/create", createResource);

// router.get("/", getResources);

// router.delete("/:id", deleteResource);

// router.put("/:id", updateResource);

// export default router;
import express from "express";
import {
  createResource,
  getResources,
  updateResource,
  deleteResource,
  getResourcesByUserId,
} from "../controllers/resourceController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createResource);
router.put("/:id", authMiddleware, updateResource);
router.delete("/delete/:id", authMiddleware, deleteResource);
router.get("/", getResources);
router.get("/user/:userId", getResourcesByUserId);

export default router;
