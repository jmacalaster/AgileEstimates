const router = require("express").Router();
const projectRoutes = require("./projects");
const userRoutes = require("./user");
const loginRoutes = require("./login");

// Book routes
router.use("/projects", projectRoutes);

// New User routes 
router.use("/user", userRoutes);

// Login User routes 
router.use("/login", loginRoutes);

module.exports = router;
