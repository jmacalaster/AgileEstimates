const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Story
      .findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Story
      .findAll({
        where: {
          project: req.params.id
        },
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Story
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Story
      .update(
        {icebox: true}, 
        {
          where: {
            id: req.params.id 
          },
      }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateStatus: function(req, res) {
    db.Story
      .update(
        {status: req.params.status}, 
        {
          where: {
            id: req.params.id 
          },
      }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Story
      .destroy({ 
        where: {
          id: req.params.id 
        },
      }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
