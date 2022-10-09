const router = require("express").Router()

const consultaController = require('../controllers/consulta.controller')

const validate = require('../middlewares/validate')
const consultaScheme = require('../middlewares/schemes/consulta.scheme')

router.get('/prueba', consultaController.prueba)
router.get('/', consultaController.listar)
router.post('/', validate(consultaScheme.crearConsulta), consultaController.crear)
router.get('/:idConsulta', consultaController.listarInfo)

module.exports = router