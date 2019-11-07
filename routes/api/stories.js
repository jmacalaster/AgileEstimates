const router = require("express").Router();
const storiesController = require("../../controllers/storiesController");

// Matches with "/api/stories"
router.route("/")
  .get(storiesController.findAll)
  .post(storiesController.create);

// Matches with "/api/stories/:id"
router
  .route("/:id")
  .get(storiesController.findById)
  .put(storiesController.update)
  .delete(storiesController.remove);

// Matches with "/api/stories/:id/backlog"
router
  .route("/:id/:status")
  .put(storiesController.updateStatus)

module.exports = router;
