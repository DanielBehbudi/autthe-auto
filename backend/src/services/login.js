const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const { generateToken } = require("../utils/jwtUtils.js");

async function login(email, password) {
  try {
    const existingUser = await User.findOne({ email }); //return the user if exix
    if (!existingUser) {
      throw new Error("Couldn't findUser");
    }
    const isPasswordValid = bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      throw new Error("invalid password");
    }

    const token = generateToken(existingUser);
    return token;
  } catch (error) {
    console.log(error.message);
    throw new Error("Invalid User");
  }
}

module.exports = {
  login,
};
