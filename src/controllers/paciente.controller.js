const models = require('../database/models/index')

const errors = require('../const/errors')

module.exports = {
  listar: async (req, res) => {
    const users = await models.paciente.findAll()

    res.json({
      success: true, 
      data: {
        pacientes: users
      }
    })
  },
  
  crear: async (req, res) => {

    const user = await models.paciente.create(req.body)
    
    res.json({
      success: true,
      data: {
        id: user.id
      }
    })

  },

  listarInfo: async (req, res, next) => {
    try {
      const user = await models.paciente.findOne({
        where: {
          id: req.params.idPaciente
        }
      })
      if(!user) return next(errors.PacienteInexistente)
  
      res.json({
        success: true,
        data: {
          paciente: user
        }
      })
    }catch(err){
      return next(err)
    }
  },

  prueba: async (req, res) => {
    try {
      console.log('ejecutando prueba');

      res.json({
        message: "Hola mundo"
      })
    } catch(err) {
      console.log(err);
    }
  },


}