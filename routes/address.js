
const express = require("express");
const router = express.Router();
const {
  getAddress,
  getAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
} = require("../controllers/address");

router
  .route("/")
  .get(getAddresses)
  .post(createAddress);

router.route("/:id").get(getAddress).put(updateAddress).delete(deleteAddress);

module.exports = router;
