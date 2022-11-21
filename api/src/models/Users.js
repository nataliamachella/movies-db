const db = require("../db/db");
const S = require("sequelize");
const Movies = require("./Movies");
const bcrypt = require("bcrypt");

class Users extends S.Model {
  validatePassword(password) {
    /* console.log('SALT',this.salt) */
    return bcrypt
      .hash(password, this.salt)

      .then((newHash) => newHash === this.password);
  }
}

Users.init(
  {
    id: {
      type: S.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "users" }
);

Users.belongsToMany(Movies, { through: "UserMovies" });
Movies.belongsToMany(Users, { through: "UserMovies" });

// Métodos de instancia
Users.prototype.hash = function (password, salt) {
  return bcrypt.hash(password, salt);
};
//Hooks
Users.beforeCreate((user) => {
  user.salt = bcrypt.genSaltSync();
  return user.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = Users;
