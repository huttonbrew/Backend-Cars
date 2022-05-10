'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('listOfEvs', {
      brand: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      year: {
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
    await queryInterface.dropTable('listOfEvs');
  }
};