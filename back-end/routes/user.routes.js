const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { verifyToken, isAdmin } = require("../middleware/authJwt");
const upload = require("../middleware/upload");
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/all", userController.getAllUsers);
router.delete("/:id", verifyToken, isAdmin, userController.deleteUser);
router.get("/verify", verifyToken, userController.verifyToken);
router.get("/:id", verifyToken, userController.getUser);
router.put(
  "/:id",
  verifyToken,
  upload.single("userImage"),
  userController.updateUser
);

module.exports = router;
