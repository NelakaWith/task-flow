// routes/projects.js
const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/", projectController.getProjects);
router.post("/", projectController.createProject);
router.get("/:id", projectController.getProjectById);

module.exports = router;
