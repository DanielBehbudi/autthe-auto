const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const createAdminAccount = require("./scripts/admin.js");

const signupRoute = require("./routes/signup.js");
const loginRoute = require("./routes/login.js");
const userRoute = require("./routes/user.js");

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

createAdminAccount();

app.use("/user", signupRoute);
app.use("/auth", loginRoute);
app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log(`server ist running on port ${PORT}`);
});
