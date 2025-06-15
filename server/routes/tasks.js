// routes/tasks.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/:projectId/tasks", taskController.createTask);
router.put("/:id", taskController.updateTask);

module.exports = router;
