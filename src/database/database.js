const Sequelize = require("sequelize");
const environment = process.env.NODE_ENV || "development";
const {
    database: { name, user, password, host, dialect },
} = require("../config/config.js")[environment];

const sequelize = new Sequelize(name, user, password, {
    host,
    dialect,
});

module.exports = sequelize;
