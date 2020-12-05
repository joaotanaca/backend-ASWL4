// Define a string de conexão com o banco de dados
module.exports = {
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
            host: process.env.DB_PORT,
        },
    },
};
