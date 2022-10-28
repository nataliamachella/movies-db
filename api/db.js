const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("users", "naty", "123456", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.info("Conectad@ a la base de datos!");
  })
  .catch((err) => {
    console.error("ERROR - No se ha podido conectar a la base de datos", err);
  });

module.exports = sequelize;
