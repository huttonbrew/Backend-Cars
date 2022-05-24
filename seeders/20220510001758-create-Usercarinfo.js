'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('userCarInfo', [{
      username: 'guest',
      nickname: 'guest car',
      brand: 'Tesla',
      model: 'Model_Y',
      year: 2022,
      mileage: 5000,
      range_mi: 279,
      range_km: 449,
      kWh_100mi: 28,
      kWh_100km: 17,
      image: "https://www.motortrend.com/uploads/sites/5/2020/10/2020-Tesla-Model-Y-01.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      username: 'vbrew',
      nickname: 'vbrew car',
      brand: 'Tesla',
      model: 'Model_X',
      year: 2022,
      mileage: 2000,
      range_mi: 311,
      range_km: 501,
      kWh_100mi: 37,
      kWh_100km: 23,
      image: "https://www.motortrend.com/uploads/sites/5/2021/01/Tesla_Model_X_Refresh_2.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      username: 'ddonato',
      nickname: 'ddonato car',
      brand: 'Tesla',
      model: 'Model_S',
      year: 2022,
      mileage: 2500,
      range_mi: 348,
      range_km: 560,
      kWh_100mi: 33,
      kWh_100km: 21,
      image: "https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-6.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      username: 'smoon',
      nickname: 'smoon car',
      brand: 'Tesla',
      model: 'Model_3',
      year: 2022,
      mileage: 1500,
      range_mi: 358,
      range_km: 576,
      kWh_100mi: 26,
      kWh_100km: 16,
      image: "https://www.motortrend.com/uploads/sites/5/2020/06/2018-Tesla-Model-3-Long-Range-Dual-Motor-lead.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
