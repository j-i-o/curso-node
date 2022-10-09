'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      models.consulta_enfermedad.findOrCreate({
        where: {
          id: "1"
        },
        defaults: {
          consultumId: 1,
          enfermedadId: 1
        }
      }),

      models.enfermedad.findOrCreate({
        where: {
          id: "2"
        },

        defaults: {
          consultumId: 2,
          enfermedadId: 2
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
