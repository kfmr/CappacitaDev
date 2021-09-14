module.exports = {
    
        client: 'mysql',
        connection: {
          host : process.env.HOST_NAME,
          dbPort : process.env.DBPORT,
          user : process.env.USER,
          password : process.env.PASSWORD,
          database : process.env.DATABASE,
          db_table: process.env.DB_TABLE
        }
};