const jwt = require("jsonwebtoken");
const { secretKey } = require("../configuration/jwtConfig.js");

function authenticateToken(req, res, next) {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Invalid authorization: missing token!!" });
  }

  const [bearer, token] = authHeader.split(" ");
  if (bearer == !"bearer " || !token) {
    return res.status(401).json({ message: "token has Invalid Format" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "invalid token" });
    }
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };
