const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/books"
router.route("/")
  .get(storiesController.findAll)
  .post(storiesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(storiesController.findById)
  .put(storiesController.update)
  .delete(storiesController.remove);

module.exports = router;
