// controllers/taskController.js
import { Task } from "../models/index.js";

export const createTaskHandler = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { title, description, status, due_date } = req.body;
    if (!title || !status) {
      return res.status(400).json({ message: "Title and status are required" });
    }
    const task = await Task.create({
      title,
      description,
      status,
      due_date,
      project_id: projectId,
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const updateTaskHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const fields = req.body;
    const [updatedCount, updatedRows] = await Task.update(fields, {
      where: { id },
      returning: true,
    });
    if (!updatedCount) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(updatedRows[0]);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
