const User = require("../models/user.js");
const bcrypt = require("bcrypt");

async function createUser(userDate) {
  const { name, email, password } = userDate;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingAdmin = await User.findOne({ email: email });

  if (!existingAdmin) {
    const createdUser = new User({
      name,
      email,
      password: hashedPassword,
      role: "customer",
    });
    const savedUser = await createdUser.save();
    return savedUser;
  } else {
    console.log("user ist schon daaaaaa");
  }
}

module.exports = { createUser };
