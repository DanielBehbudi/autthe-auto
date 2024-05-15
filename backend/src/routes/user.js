const express = require("express");
const cors = require("cors");
const userController = require("../controllers/user.js");
const authMiddelWare = require("../utils/authMiddelWare.js");
const router = express.Router();

router.use(cors());

router.get("/user", authMiddelWare.authenticateToken, userController.getUser);

module.exports = router;
