const { Sequelize } = require("sequelize");

const db = new Sequelize("movies-db", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
