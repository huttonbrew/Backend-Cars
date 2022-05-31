
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_car_info', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
<<<<<<< HEAD
        references: {
          model: {tableName: 'user_info'},
          key: 'id'
      }
=======
>>>>>>> ebfe26b18f9b31308c6c2fb352f3a2eeee6f9582
      },
      username: {
        type: Sequelize.STRING,
      },
      nickname: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING
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
      image: {
        type: Sequelize.STRING
      },
      userInfoId: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'user_info'
          },
          key: 'id'
        },
        allowNull: false
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
    await queryInterface.dropTable('user_car_info');
  }
};