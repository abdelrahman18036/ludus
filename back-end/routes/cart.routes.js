const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");
const { verifyToken } = require("../middleware/authJwt");

router.post("/", verifyToken, cartController.addToCart);
router.get("/:userId", verifyToken, cartController.getCart);

module.exports = router;
