const db = require("../models");
const passport = require("../config/passport");

// Defining methods for the booksController
module.exports = {
  create: function (req, res, next) {
    console.log(req.body);
    db.User
      .create({
        email: req.body.email,
        password: req.body.password
      }).then(function (response) {
        console.log(response.dataValues.id);
        res.json(response.dataValues.id);
      }).catch(function (err) {
        console.log(err);
        next(err);
        res.status(400).send(err);
      });
  },
  login: function (req, res, next) {
    passport.authenticate("local", function (err, account) {
      console.log(account.dataValues.id);
      if (!account) {
        let err = new Error("Invalid Login Credentials")
        next(err);
        res.status(400).send(err);
      } else {
        res.status(err ? 400 : 200).json(err ? err : account.dataValues.id);
      };
    })(req, res)
  }
};
