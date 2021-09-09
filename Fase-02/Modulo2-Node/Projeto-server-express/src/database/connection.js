const databaseConfig = require("./knexfile");
const knex = require('knex');

//chama as configurações do banco de dados
const databaseConnection = knex(databaseConfig);


module.exports = {
    databaseConnection
}