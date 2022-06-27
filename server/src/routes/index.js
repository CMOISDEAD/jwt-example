const express = require("express");
const router = express.Router();
const usersModel = require("../db/user.json");
const users = usersModel.users;

// routes
router.get("/", (req, res) => {
  res.send("Server listen on port 8080;");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const userAuth = users.find((user) => user.username === username);
  const passAuth = userAuth ? userAuth.password === password : false;

  if (!passAuth) {
    res.status(401).json({
      error: "invalid user or password",
    });
  } else {
    res.send({
      name: userAuth.username,
      email: userAuth.email,
    });
  }
});

module.exports = router;
