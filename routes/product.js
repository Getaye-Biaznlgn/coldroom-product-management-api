const {
  productValidation,
  validationResult,
} = require("../middleware/product_validation");

const express = require("express");
const router = express.Router();
const {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

router
  .route("/")
  .get(getProducts)
  .post(productValidation, validationResult, createProduct);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
