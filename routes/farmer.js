
const express = require("express");
const router = express.Router();
const {
  getFarmer,
  getFarmers,
  createFarmer,
  updateFarmer,
  deleteFarmer,
} = require("../controllers/farmer");

router
  .route("/")
  .get(getFarmers)
  .post(createFarmer);

router.route("/:id").get(getFarmer).put(updateFarmer).delete(deleteFarmer);

module.exports = router;
