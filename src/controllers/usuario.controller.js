const models = require('../database/models/index')

const errors = require('../const/errors')

module.exports = {
  listar: async (req, res) => {
    const users = await models.usuario.findAll()

    res.json({
      success: true, 
      data: {
        usuarios: users
      }
    })
  },
  
  crear: async (req, res) => {

    const user = await models.usuario.create(req.body)
    
    res.json({
      success: true,
      data: {
        id: user.id
      }
    })

  },

  listarInfo: async (req, res, next) => {
    try {
      const user = await models.usuario.findOne({
        where: {
          id: req.params.idUsuario
        }
      })
      if(!user) return next(errors.UsuarioInexistente)
  
      res.json({
        success: true,
        data: {
          usuario: user
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