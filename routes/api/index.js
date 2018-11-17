const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./user");
const loginRoutes = require("./login");

// Book routes
router.use("/books", bookRoutes);

// New User routes 
router.use("/user", userRoutes);

// Login User routes 
router.use("/login", loginRoutes);

module.exports = router;
