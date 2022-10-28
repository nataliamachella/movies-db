const sequelize = require("../db");
const S = require("sequelize");

class User extends S.Model {}

User.init(
  {
    id: {
      type: S.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: S.STRING,
      allowNull: false,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastname: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "users" }
);

module.exports = User;
