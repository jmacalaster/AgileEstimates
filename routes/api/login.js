const router = require("express").Router();
const loginController = require("../../controllers/loginController");
var passport = require("../../config/passport");

// Matches with "/api/login"
router.route("/")
  .post(passport.authenticate("local"), loginController.login);

// Matches with "/api/signup/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
