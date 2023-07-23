const express = require("express");
const {
  createUser,
  loginUser,
  updateUserProfile,
  deleteUserProfile,
} = require("../controllers/UserCtrl.js");
const { authMiddleware } = require("../middlerwares/generateToken.js");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);

router.put("/", authMiddleware,updateUserProfile);

router.delete("/", authMiddleware, deleteUserProfile);

module.exports = router;
