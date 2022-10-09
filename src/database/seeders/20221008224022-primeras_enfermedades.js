'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      models.enfermedad.findOrCreate({
        where: {
          id: "1"
        },
        defaults: {
          nombre: "Alopecia",
          riesgo: "Bajo",
        }
      }),

      models.enfermedad.findOrCreate({
        where: {
          id: "2"
        },
        defaults: {
          nombre: "Conjuntivitis",
          riesgo: "Medio",
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
