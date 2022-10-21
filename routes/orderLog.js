const express = require("express");
const router = express.Router();
const {
  getOrderLog,
  getOrderLogs,
  createOrderLog,
  updateOrderLog,
  deleteOrderLog,
} = require("../controllers/orderLog");

router.route("/").get(getOrderLogs).post(createOrderLog);

router.route("/:id").get(getOrderLog).put(updateOrderLog).delete(deleteOrderLog);

module.exports = router;
