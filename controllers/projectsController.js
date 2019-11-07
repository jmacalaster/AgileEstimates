const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Project
      .findAll({
        where: {
          $or: [
            {
              user_id: req.headers.user_id
            },
            {
              is_example: 1
            }
          ]
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => { console.log(err); res.status(422).json(err) });
  },
  findById: function (req, res) {
    db.Project
      .findOne({
        where: {
          id: req.params.id
        },
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.Project
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => { console.log(err); res.status(422).json(err) });
  },
  update: function (req, res) {
    db.Project
      .update(req.body,
        {
          where: {
            id: req.params.id
          },
        }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Project
      .destroy({
        where: {
          id: req.params.id
        },
      }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
