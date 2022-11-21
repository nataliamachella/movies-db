const db = require("../db/db");
const S = require("sequelize");

class Movies extends S.Model {}

Movies.init(
  {
    id: {
      type: S.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: S.STRING,
      allowNull: false,
    },
    genre: {
      type: S.STRING,
      allowNull: false,
    },
    date: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "movies" }
);

module.exports = Movies;
