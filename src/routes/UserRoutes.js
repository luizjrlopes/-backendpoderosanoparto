const express = require('express')
const router = express.Router()
const UserController = require('../controller/UserController')
const UserValidation = require('../middlewares/UserValidation')


router.post('/', UserValidation, UserController.create)
router.put('/:id', UserController.update)
router.post('/:cpf/:senha', UserController.login)
router.delete('/:id', UserController.delete)








module.exports = router