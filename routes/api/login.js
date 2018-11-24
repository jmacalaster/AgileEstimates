const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/login"
// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.route("/")
  .post(loginController.login);

module.exports = router;
