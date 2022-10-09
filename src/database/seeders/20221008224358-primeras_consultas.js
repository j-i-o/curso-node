'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      models.consulta.findOrCreate({
        where: {
          id: "1"
        },
        defaults: {
          consultorio: 1,
          fecha: new Date('2022-09-05T00:00:00'),
          pacienteId: 1
        }
      }),

      models.consulta.findOrCreate({
        where: {
          id: "2"
        },
        defaults: {
          consultorio: 1,
          fecha: new Date('2022-07-05T00:00:00'),
          pacienteId: 2
        }
      })
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
