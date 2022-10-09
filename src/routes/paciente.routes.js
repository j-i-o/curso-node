const router = require("express").Router()

const pacienteController = require('../controllers/paciente.controller')

const validate = require('../middlewares/validate')
const pacienteScheme = require('../middlewares/schemes/paciente.scheme')

router.get('/prueba', pacienteController.prueba)
router.get('/', pacienteController.listar)
router.post('/', validate(pacienteScheme.crearPaciente), pacienteController.crear)
router.get('/:idPaciente', pacienteController.listarInfo)

module.exports = router