const express = require("express");
const { validateAuth } = require("../middlewars/auth");
const router = express.Router();
const {
  getUsers,
  createUsers,
  deleteUser,
  updateUser,
  getUser,
  loginUser,
  goDashboard,
  goMe,
  logoutUser,
} = require("../controllers/usersControllers");

router.get("/users", getUsers);
router.post("/register", createUsers);
router.post("/login", loginUser);
router.get("/dashboard", validateAuth, goDashboard);
router.get("/me", validateAuth, goMe);
router.post("/logout", logoutUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/users/:id", getUser);

module.exports = router;
