const models = require('../database/models/index')

const errors = require('../const/errors')

module.exports = {
  listar: async (req, res) => {
    const users = await models.enfermedad.findAll()

    res.json({
      success: true, 
      data: {
        enfermedades: users
      }
    })
  },
  
  crear: async (req, res) => {

    const user = await models.enfermedad.create(req.body)
    
    res.json({
      success: true,
      data: {
        id: user.id
      }
    })

  },

  listarInfo: async (req, res, next) => {
    try {
      const user = await models.enfermedad.findOne({
        where: {
          id: req.params.idEnfermedad
        },
        include: [{
          model: models.consulta_enfermedad,
          include:[{
            model: models.consulta
          }]
        }]
      })
      if(!user) return next(errors.EnfermedadInexistente)
  
      res.json({
        success: true,
        data: {
          enfermedad: user
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