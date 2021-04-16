const express = require('express')
const router = express.Router()
const TaskController = require('../controller/TaskController')


router.post('/', TaskController.create)
router.get('/filter/week/:cpf', TaskController.week)
router.get('/filter/month/:cpf', TaskController.month)
router.get('/filter/all/:cpf', TaskController.all)
router.get('/exercicioDoDia/:cpf/:titulo', TaskController.exercicioDoDia)





module.exports = router