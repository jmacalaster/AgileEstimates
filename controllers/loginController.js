const db = require("../models");
const passport = require("../config/passport");

// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
    console.log(req.body);
    db.User
      .create({
        email: req.body.email,
        password: req.body.password
      }).then(function () {
        res.json();
      }).catch(function (err) {
        console.log(err);
        res.json(err);
      });
  },
  login: function (req, res, next) {
    passport.authenticate("local", function (err, account) {
      if (!account) {
        let err = new Error("Invalid Login Credentials")
        next(err);
        res.status(400).send(err);
      } else {
        res.status(err ? 400 : 200).send(err ? err : account);
      };
    })(req, res)
  }
};
