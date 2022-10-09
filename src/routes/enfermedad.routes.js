const router = require("express").Router()

const enfermedadController = require('../controllers/enfermedad.controller')

const validate = require('../middlewares/validate')
const enfermedadScheme = require('../middlewares/schemes/enfermedad.scheme')

router.get('/prueba', enfermedadController.prueba)
router.get('/', enfermedadController.listar)
router.post('/', validate(enfermedadScheme.crearEnfermedad), enfermedadController.crear)
router.get('/:idEnfermedad', enfermedadController.listarInfo)

module.exports = router