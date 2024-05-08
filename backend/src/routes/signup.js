const express = require("express");
const signupController = require("../controllers/signup.js");

const router = express.Router();

router
  .get("/all", (req, res) => {
    res.send("users");
  })
  .post("/register", signupController.createUser);

module.exports = router;
