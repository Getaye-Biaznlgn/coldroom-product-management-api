
const express = require("express");
const router = express.Router();
const {
  getWholesaler,
  getWholesalers,
  createWholesaler,
  updateWholesaler,
  deleteWholesaler,
} = require("../controllers/wholesaler");

router
  .route("/")
  .get(getWholesalers)
  .post(createWholesaler);

router.route("/:id").get(getWholesaler).put(updateWholesaler).delete(deleteWholesaler);

module.exports = router;
