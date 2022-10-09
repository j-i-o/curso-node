const Joi = require('joi')

let crearEnfermedad = Joi.object({

  nombre: Joi.string().required(),
  riesgo: Joi.string().required(),
})

module.exports = {
  crearEnfermedad
}