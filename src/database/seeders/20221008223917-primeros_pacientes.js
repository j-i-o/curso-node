'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      models.paciente.findOrCreate({
        where: {
          id: "1"
        },
        defaults: {
          nombre: "Juan",
          apellido: "Ordo",
          email: "la@ho.co",
          edad: "34",
          obraSocial: "IOMA"
        }
      }),

      models.paciente.findOrCreate({
        where: {
          id: "2"
        },
        defaults: {
          nombre: "Sabrina",
          apellido: "Boni",
          email: "la@ho.co",
          edad: "38",
          obraSocial: "Swiss"
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
