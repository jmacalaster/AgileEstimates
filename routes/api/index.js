const router = require("express").Router();
const projectRoutes = require("./projects");
const userRoutes = require("./user");
const loginRoutes = require("./login");
const storyRoutes = require("./stories")

// Projects routes
router.use("/projects", projectRoutes);

// Stories routes
router.use("/stories", storyRoutes);

// New User routes 
router.use("/user", userRoutes);

// Login User routes 
router.use("/login", loginRoutes);

module.exports = router;
