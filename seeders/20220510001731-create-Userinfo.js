'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Userinfo', [{
      firstName: 'Guest',
      lastName: 'Doe',
      city: 'Atlanta',
      country: 'USA',
      email: 'guest@dgcrafts.com',
      username: 'guest',
      password: '',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      firstName: 'Victor',
      lastName: 'Brew',
      city: 'Chicago',
      country: 'USA',
      email: 'vbrew@dgcrafts.com',
      username: 'vbrew',
      password: '',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      firstName: 'Daniel',
      lastName: 'Donato',
      city: '',
      country: 'Canada',
      email: 'ddonato@dgcrafts.com',
      username: 'ddonato',
      password: '',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      firstName: 'Sam',
      lastName: 'Moon',
      city: 'Hamburg',
      country: 'USA',
      email: 'smoon@dgcrafts.com',
      username: 'smoon',
      password: '',
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
