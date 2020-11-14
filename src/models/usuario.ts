// Define que estamos utilizando o sequelize
import Sequelize from "sequelize";

// Obtem dados de conexão entre sequelize e banco de dados MySQL
import sequelize from "../database/database";

// Cria tabela no BD e seus campos
const Usuario = sequelize.define("usuario", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  nome: {
    allowNull: false,
    type: Sequelize.STRING(100),
    validate: {
      len: [3, 100],
    },
  },
  salario: {
    allowNull: false,
    type: Sequelize.DOUBLE,
    validate: {
      len: [1, 999999],
    },
  },
  dataNascimento: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  ativo: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

export default Usuario;
