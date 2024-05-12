const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { verifyToken, isAdmin } = require("../middleware/authJwt");


router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/all", verifyToken, isAdmin, userController.getAllUsers);
router.delete("/:id", verifyToken, isAdmin, userController.deleteUser);
router.get("/verify", verifyToken, userController.verifyToken);
router.get("/:id", verifyToken, userController.getUser);


module.exports = router;
