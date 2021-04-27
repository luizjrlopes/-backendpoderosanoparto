const express = require('express')
const router = express.Router()
const UserController = require('../controller/UserController')
const UserValidation = require('../middlewares/UserValidation')


router.post('/', UserValidation, UserController.create)
router.put('/:id', UserController.update)
router.put('/senha/:id', UserController.updateSenha)
router.post('/:cpf/:senha', UserController.login)
router.post('/:cpf/:email/:dataNasc', UserController.esqueceuSenha)
router.delete('/:id', UserController.delete)








module.exports = router