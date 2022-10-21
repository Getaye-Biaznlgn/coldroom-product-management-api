
const express = require("express");
const router = express.Router();
const {
  getProductType,
  getProductTypes,
  createProductType,
  updateProductType,
  deleteProductType,
} = require("../controllers/productType");

router
  .route("/")
  .get(getProductTypes)
  .post(createProductType);

router.route("/:id").get(getProductType).put(updateProductType).delete(deleteProductType);

module.exports = router;
