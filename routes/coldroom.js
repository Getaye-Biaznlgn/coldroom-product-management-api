// const {
//     productValidation,
//     validationResult,
//   } = require("../middleware/product_validation");
  
  const express = require("express");
  const router = express.Router();
  const {
    getColdroom,
    getColdrooms,
    createColdroom,
    updateColdroom,
    deleteColdroom,
  } = require("../controllers/coldroom");
  
  router
    .route("/")
    .get(getColdrooms)
    .post(createColdroom);
  
  router.route("/:id").get(getColdroom).put(updateColdroom).delete(deleteColdroom);
  
  module.exports = router;
  