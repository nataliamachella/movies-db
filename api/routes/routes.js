const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", (req, res) => {
  const { email, password, name, lastname } = req.body;
  User.create({
    email,
    password,
    name,
    lastname,
  })
    .then(() => console.log("usuario creado"))
    .catch((error) => res.status(500).json({ message: error.message }));
});
module.exports = router;
