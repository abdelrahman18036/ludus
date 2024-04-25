const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const { verifyToken, isAdmin } = require("../middleware/authJwt");

router.post("/", verifyToken, productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/search", productController.searchProducts);
router.get("/category/:name", productController.getProductsByCategory);
router.get("/:id", productController.getProductById);
router.put("/:id", verifyToken, isAdmin, productController.updateProduct);
router.delete("/:id", verifyToken, isAdmin, productController.deleteProduct);

module.exports = router;
