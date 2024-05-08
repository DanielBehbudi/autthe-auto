const crypto = require("crypto");

const secretKay = crypto.randomBytes(32).toString("hex");

module.exports = {
  secretKay: secretKay,
};
