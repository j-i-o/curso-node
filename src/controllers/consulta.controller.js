const models = require('../database/models/index')

const errors = require('../const/errors')

module.exports = {
  listar: async (req, res) => {
    const users = await models.consulta.findAll()

    res.json({
      success: true, 
      data: {
        consultas: users
      }
    })
  },
  
  crear: async (req, res) => {

    const consulta = await models.consulta.create(req.body)

    const relacion = await models.consulta_enfermedad.create({
      consultumId: consulta.id,
      enfermedadId: req.body.enfermedadId 
    })
    
    res.json({
      success: true,
      data: {
        id: consulta.id
      }
    })

  },

  listarInfo: async (req, res, next) => {
    try {
      const user = await models.consulta.findOne({
        where: {
          id: req.params.idConsulta
        },
        include: [{
          model: models.consulta_enfermedad,
          include:[{
            model: models.enfermedad
          }]
        }]
      })
      if(!user) return next(errors.ConsultaInexistente)
  
      res.json({
        success: true,
        data: {
          consulta: user
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