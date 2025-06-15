// routes/tasks.js
import { Router } from "express";
import {
  createTaskHandler,
  updateTaskHandler,
} from "../controllers/taskController.js";
import auth from "../middleware/auth.js";

const router = Router();

router.post("/:projectId/tasks", auth, createTaskHandler);
router.put("/:id", auth, updateTaskHandler);

export default router;
