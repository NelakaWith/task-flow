// routes/projects.js
import { Router } from "express";
import {
  getProjectsHandler,
  createProjectHandler,
  getProjectByIdHandler,
} from "../controllers/projectController.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", auth, getProjectsHandler);
router.post("/", auth, createProjectHandler);
router.get("/:id", auth, getProjectByIdHandler);

export default router;
