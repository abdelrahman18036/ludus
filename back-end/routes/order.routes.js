const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
const { verifyToken, isAdmin } = require("../middleware/authJwt");

router.get("/", verifyToken, orderController.getAllOrders);
router.post("/", verifyToken, orderController.placeOrder);
router.get("/:userId", verifyToken, orderController.getOrderByUserId);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", verifyToken, isAdmin, orderController.deleteOrder);
module.exports = router;
