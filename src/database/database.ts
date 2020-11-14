// Define que vamos utilizar o Sequelize como ORM
import { Sequelize } from "sequelize";

// Define que vamos usar em modo de ambiente ou desenvolvimento
const environment = process.env.NODE_ENV || "development";
const { database } = require("../config/config")[environment];
// Para o sequelize os dados do banco de dados
const sequelize = new Sequelize(
  database.name,
  database.user,
  database.password,
  {
    host: database.host,
    dialect: database.dialect,
  }
);

export default sequelize;
