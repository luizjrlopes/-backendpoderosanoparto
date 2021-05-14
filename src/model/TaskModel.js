const mongoose = require('../config/database')
const Schema = mongoose.Schema
const date = new Date()

const datamenosfuso = new Date(date.valueOf() - date.getTimezoneOffset() * 60000)
const dataConvertida = datamenosfuso.toISOString().replace(/\ .\d{3}Z$/, '')


const TaskSchema = new Schema({
    titulo: { type: String, require: true },
    cpf: { type: String, required: true },
    duracao: { type: String, require: true },
    finalizada: { type: Date, default: dataConvertida },
    usuarioDaTarefa: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },


});

module.exports = mongoose.model('Task', TaskSchema)