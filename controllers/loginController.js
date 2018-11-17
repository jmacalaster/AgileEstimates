const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findOne({
        where: {
          id: req.params.id
        },
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
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
    res.json("/books")
  },
  remove: function(req, res) {
    db.User
      .destroy({ 
        where: {
          _id: req.params.id 
        },
      }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
