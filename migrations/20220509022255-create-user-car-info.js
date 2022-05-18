'use strict';

const { sequelize } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize, userInfo) {
    await queryInterface.createTable('userCarInfo', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: {tableName: 'userCarInfo'},
          key: 'id',
      }
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      mileage: {
        type: Sequelize.INTEGER
      },
      range_mi: {
        type: Sequelize.INTEGER
      },
      range_km: {
        type: Sequelize.INTEGER
      },
      kWh_100mi: {
        type: Sequelize.INTEGER
      },
      kWh_100km: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userCarInfo');
  }
};