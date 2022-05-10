const Sequelize = require('sequelize');

module.exports = new Sequelize('postgres', 'postgres', 'null', {
    host: 'localhost',
    dialect: 'postgres'
});