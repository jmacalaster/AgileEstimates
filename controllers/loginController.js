const db = require("../models");
const passport = require("../config/passport");

// Defining methods for the booksController
module.exports = {
  create: function(req, res) {
      console.log(req.body);
    db.User
      .create({
        email: req.body.email,
        password: req.body.password
      }).then(function() {
        res.json();
      }).catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  },
  login: function(req, res) {
        console.log(req.body);  
    passport.authenticate("local"), res.json();
  }
};
