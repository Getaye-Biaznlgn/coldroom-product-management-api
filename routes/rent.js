
const express = require("express");
const router = express.Router();
const {
  getRent,
  getRents,
  createRent,
  updateRent,
  deleteRent,
} = require("../controllers/rent");

router
  .route("/")
  .get(getRents)
  .post(createRent);

router.route("/:id").get(getRent).put(updateRent).delete(deleteRent);

module.exports = router;
