const authService = require("../services/login.js");

async function login(req, res) {
  try {
    const { email, password } = req.body; // von User
    const token = await authService.login(email, password);

    res.json({ token: token });
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ error: error.message });
  }
}

module.exports = { login };
