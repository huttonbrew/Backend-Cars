'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserCarInfos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: students,
          key: 'id',
      }
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
      milage: {
        type: Sequelize.INTEGER
      },
      range_mi: {
        type: Sequelize.INTEGER
      },
      range_km: {
        type: Sequelize.INTEGER
      },
      kWhper100_mi: {
        type: Sequelize.INTEGER
      },
      kWhper100_km: {
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
    await queryInterface.dropTable('UserCarInfos');
  }
};