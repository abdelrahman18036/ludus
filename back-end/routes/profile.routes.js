const express = require("express");
const router = express.Router();
const userController = require("../controllers/profile.controller");

router.put("/profile/:id", userController.updateUserProfile);
router.get("/profile/:id", userController.getUserProfile);

module.exports = router;
