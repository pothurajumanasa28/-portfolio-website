const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// Get all projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add project
router.post("/", async (req, res) => {
    try {
        const project = new Project(req.body);
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// Add sample project
router.get("/add-todo", async (req, res) => {
  try {
    const project = new Project({
      title: "To-Do App",
      description: "Task management application with CRUD operations",
      technologies: ["React", "Node.js"]
    });

    await project.save();
    res.send("Todo project added!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/add-weather", async (req, res) => {
  try {
    const project = new Project({
      title: "Weather App",
      description: "Weather application using API integration",
      technologies: ["HTML", "CSS", "JavaScript"]
    });

    await project.save();
    res.send("Weather project added!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/add-sample", async (req, res) => {
  try {
    const project = new Project({
      title: "Personal Portfolio Website",
      description: "Full-stack portfolio using React, Node.js and MongoDB",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/pothurajumanasa28/portfolio"
    });

    await project.save();

    res.send("Sample project added successfully!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;