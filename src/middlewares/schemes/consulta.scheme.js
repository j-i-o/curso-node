const Joi = require('joi')

let crearConsulta = Joi.object({

  consultorio: Joi.number().required(),
  fecha: Joi.date().required(),
  pacienteId: Joi.number().required(),
  enfermedadId: Joi.number().required()
})

module.exports = {
  crearConsulta
}