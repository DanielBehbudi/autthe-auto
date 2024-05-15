const User = require("../models/user.js");

async function getUser() {
  const user = await User.find({});
  return user;
}

module.exports = { getUser };
