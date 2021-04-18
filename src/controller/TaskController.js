const TaskModel = require('../model/TaskModel')
const { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth } = require('date-fns')

const current = new Date()

class TaskController {

    async create(req, res) {
        const task = new TaskModel(req.body)
        await task
            .save()
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })

    }



    async week(req, res) {

        await TaskModel
            .find({
                'cpf': { '$in': req.params.cpf },
                'finalizada': { '$gte': startOfWeek(current), '$lt': endOfWeek(current) }
            })
            .sort('finalizada')
            .then(response => {

                return res.status(200).json(response)

            })
            .catch(error => {
                return res.status(500).json(error)
            })

    }
    async month(req, res) {

        await TaskModel
            .find({
                'cpf': { '$in': req.params.cpf },
                'finalizada': { '$gte': startOfMonth(current), '$lt': endOfMonth(current) }
            })
            .sort('finalizada')
            .then(response => {

                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })

    }

    async all(req, res) {

        await TaskModel.find({ cpf: { '$in': req.params.cpf } })
            .sort('finalizada')//organizado por hora
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })

    }


    async exercicioDoDia(req, res) {

        await TaskModel
            .findOne({
                'cpf': { '$in': req.params.cpf },
                'titulo': { '$in': req.params.titulo },
                'finalizada': { '$gte': startOfDay(current), '$lt': endOfDay(current) }
            })
            .sort('finalizada')
            .then(response => {

                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })

    }


}

module.exports = new TaskController();