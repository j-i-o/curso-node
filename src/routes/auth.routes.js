const router = require("express").Router()

const authController = require('../controllers/auth.controller')

const validate = require('../middlewares/validate')
const authScheme = require('../middlewares/schemes/login.scheme')

router.get('/login', validate(authScheme.login), authController.login)
router.get('/registrarse', authController.registrarse)

module.exports = router