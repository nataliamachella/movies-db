const { generateToken, validateToken } = require("../config/tokens");

const User = require("../models/Users");

const getUsers = (req, res) => {
  User.findAll()
    .then((users) => res.send(users))
    .catch((err) => console.log(err));
};

const createUsers = (req, res) => {
  User.create(req.body)
    .then((newUser) => res.send(newUser))
    .catch((err) => console.log(err));
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);

    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      const payload = {
        email: user.email,
        fullname: user.fullname,
      };

      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  });
};

const goDashboard = (req, res) => {
  const token = req.cookies.token;
  const { user } = validateToken(token);
  res.send(user);
};

const goMe = (req, res) => {
  res.send(req.user);
};

const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

const deleteUser = (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.status(204).send("Deleted User"))
    .catch((err) => console.log(err));
};

const updateUser = (req, res) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(201))
    .catch((err) => console.log(err));
};

const getUser = (req, res) => {
  User.findByPk(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => console.log(err));
};

module.exports = {
  getUsers,
  createUsers,
  deleteUser,
  updateUser,
  getUser,
  loginUser,
  goDashboard,
  goMe,
  logoutUser,
};
