//require('dotenv').config(); taking it out for now

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('ecommerce_db', 'root', 'mypassword', {
      host: 'localhost',
      port: 3306, ///maybe dont need this?
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
