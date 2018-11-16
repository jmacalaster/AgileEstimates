// Requiring our router, models and passport as we've configured it
const router = require("express").Router();
const db = require("../models");
const passport = require("../config/passport");

// Matches with "/api/books"
router.route("/api/login")
  .post(passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

// Matches with "/api/books/:id"
router
  .route("/api/:user_data")
  .get(function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

module.exports = router;
