const Sequelize = require('sequelize');

module.exports = new Sequelize('evproject', 'cars_db', "postgres", 'null', {
    host: 'localhost',
    dialect: 'postgres'
});