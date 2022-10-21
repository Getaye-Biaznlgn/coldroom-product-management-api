const express = require("express");
const router = express.Router();
const {
  getOrder,
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order");

router.route("/").get(getOrders).post(createOrder);

router.route("/:id").get(getOrder).put(updateOrder).delete(deleteOrder);

module.exports = router;
