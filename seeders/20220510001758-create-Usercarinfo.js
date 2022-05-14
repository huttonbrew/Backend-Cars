'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('userCarInfo', [{
      username: 'guest',
      brand: 'Tesla',
      model: 'Model Y AWD',
      year: 2022,
      mileage: 5000,
      range_mi: 279,
      range_km: 449,
      kWh_100mi: 28,
      kWh_100km: 17,
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      username: 'vbrew',
      brand: 'Tesla',
      model: 'Model X Plaid (22in Wheels)',
      year: 2022,
      mileage: 2000,
      range_mi: 311,
      range_km: 501,
      kWh_100mi: 37,
      kWh_100km: 23,
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      username: 'ddonato',
      brand: 'Tesla',
      model: 'Model S Plaid (21in Wheels)',
      year: 2022,
      mileage: 2500,
      range_mi: 348,
      range_km: 560,
      kWh_100mi: 33,
      kWh_100km: 21,
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      username: 'smoon',
      brand: 'Tesla',
      model: 'Model 3 Long Range AWD',
      year: 2022,
      mileage: 1500,
      range_mi: 358,
      range_km: 576,
      kWh_100mi: 26,
      kWh_100km: 16,
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
