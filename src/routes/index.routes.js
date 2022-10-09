const { Router } = require('express')

const pacienteRoutes = require('./paciente.routes')
const consultaRoutes = require('./consulta.routes')
const enfermedadRoutes = require('./enfermedad.routes')
const authRoutes = require('./auth.routes')
const decodeJWT = require('../middlewares/decodeJWT')

const rutas_init = () => {
  const router = Router()

  router.use("/pacientes", decodeJWT, pacienteRoutes)
  router.use("/consultas", decodeJWT, consultaRoutes)
  router.use("/enfermedades", decodeJWT, enfermedadRoutes)

  return router
}

const rutas_auth = () => {
  const router = Router()

  router.use("/auth", authRoutes)

  return router
}

module.exports = { rutas_init, rutas_auth }