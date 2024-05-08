const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log("MG: Connected"))
  .catch((err) => console.log(err));

module.exports = mongoose;
