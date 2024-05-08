const User = require("../models/user.js");
const bcrypt = require("bcrypt");

async function createAdminAccount() {
  try {
    const existingAdmin = await User.findOne({ email: "a@e.com" });

    if (!existingAdmin) {
      const newAdmin = new User({
        email: "a@e.com",
        name: "admin",
        password: await bcrypt.hash("admin", 10),
        role: "admin",
      });

      await newAdmin.save();
      console.log("Admin ist ever created");
    } else {
      console.log("already created");
    }
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = createAdminAccount;
