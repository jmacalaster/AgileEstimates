const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/user"
router.route("/")
  .post(loginController.create);

module.exports = router;
