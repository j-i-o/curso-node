'use strict'

const models = require('../models/index')
const bcrypt = require('bcryptjs')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      models.usuario.findOrCreate({
        where: {
          id: "1"
        },
        defaults: {
          nombre: "Juan",
          apellido: "Ordo",
          email: "la@ho.co",
          edad: 25,
          password: bcrypt.hashSync('password', 10)
        }
      })
    ])
  }
}