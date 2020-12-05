const Sequelize = require("sequelize");
const {
    database: { name, user, password, host, dialect },
} = require("../config/config.js");
const sequelize = new Sequelize(name, user, password, {
    host,
    dialect,
});

module.exports = sequelize;
