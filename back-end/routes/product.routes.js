const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const { verifyToken, isAdmin } = require("../middleware/authJwt");
const upload = require("../middleware/upload");

router.post(
  "/",
  verifyToken,
  upload.single("productImage"),
  productController.createProduct
);

router.get("/", productController.getAllProducts);
router.get("/latest", productController.getLatestProducts);
router.get("/topauthors", productController.getTopAuthors);
router.get("/search", productController.searchProducts);
router.get("/category/:id", productController.getProductsByCategory);
router.get("/author/:id", productController.getProductsByAuthor);
router.get("/:id", productController.getProductById);
router.put("/:id", verifyToken, productController.updateProduct);

router.delete("/:id", verifyToken, productController.deleteProduct);
module.exports = router;
