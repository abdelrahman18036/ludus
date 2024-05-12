const express = require("express");
const router = express.Router();
const userController = require("../controllers/profile.controller");

router.put("/:id", userController.updateUserProfile);
router.get("/:id", userController.getUserProfile);

module.exports = router;
