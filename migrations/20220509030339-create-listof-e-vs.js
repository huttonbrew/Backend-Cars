'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('listOfEvs', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      topRange_mi: {
        type: Sequelize.INTEGER
      },
      botRange_mi: {
        type: Sequelize.INTEGER
      },
      topRange_km: {
        type: Sequelize.INTEGER
      },
      botRange_km: {
        type: Sequelize.INTEGER
      },
      top_kWh_100mi: {
        type: Sequelize.INTEGER
      },
      bot_kWh_100mi: {
        type: Sequelize.INTEGER
      },
      top_kWh_100km: {
        type: Sequelize.INTEGER
      },
      bot_kWh_100km: {
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
    await queryInterface.dropTable('listOfEvs');
  }
};