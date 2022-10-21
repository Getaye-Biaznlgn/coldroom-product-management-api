const express = require("express");
const router = express.Router();
const {
  getColdroomProduct,
  getColdroomProducts,
  createColdroomProduct,
  updateColdroomProduct,
  deleteColdroomProduct,
} = require("../controllers/coldroomProduct");

router.route("/").get(getColdroomProducts).post(createColdroomProduct);

router.route("/:id").get(getColdroomProduct).put(updateColdroomProduct).delete(deleteColdroomProduct);

module.exports = router;
