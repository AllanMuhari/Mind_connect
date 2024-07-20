import { Router } from "express";
import {
  createResource,
  getResources,
  deleteResource,
  updateResource,
} from "../controllers/resourceController.js";

const router = Router();

router.post("/create", createResource);

router.get("/", getResources);

router.delete("/:id", deleteResource);

router.put("/:id", updateResource);

export default router;
