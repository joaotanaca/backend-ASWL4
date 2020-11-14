export default {
  development: {
    database: {
      host: "localhost",
      port: 3306,
      name: "db_sistema_pedidos",
      dialect: "mysql",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
  },
  production: {
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
    },
  },
};
