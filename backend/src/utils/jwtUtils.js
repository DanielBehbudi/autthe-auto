const jwt = require("jsonwebtoken");

const { secretKey } = require("../configuration/jwtConfig.js");

function generateToken(user) {
  const payload = {
    id: user._id,
    email: user._email,
    role: user._role,
  };
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
}

module.exports = { generateToken };
