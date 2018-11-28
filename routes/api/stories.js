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

// Matches with "/api/stories/:id/false"
router
  .route("/:id/false")
  .put(storiesController.updateBacklog)

// Matches with "/api/stories/:id/true"
router
  .route("/:id/true")
  .put(storiesController.updateIcebox)

module.exports = router;
