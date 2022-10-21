const express = require("express");
const router = express.Router();
const {
  getFarmerProduct,
  getFarmerProducts,
  createFarmerProduct,
  updateFarmerProduct,
  deleteFarmerProduct,
} = require("../controllers/farmerProduct");

router.route("/").get(getFarmerProducts).post(createFarmerProduct);

router.route("/:id").get(getFarmerProduct).put(updateFarmerProduct).delete(deleteFarmerProduct);

module.exports = router;
