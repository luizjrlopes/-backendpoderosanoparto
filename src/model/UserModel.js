const mongoose = require('../config/database')
const Schema = mongoose.Schema
const date = new Date()
const datamenosfuso = new Date(date.valueOf() - date.getTimezoneOffset() * 60000)
const dataConvertida = datamenosfuso.toISOString().replace(/\ .\d{3}Z$/, '')
const UserSchema = new Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    senha: { type: String, required: true },
    sexo: { type: String, required: true },
    cep: { type: String, required: true },
    email: { type: String, required: true },
    raca: { type: String, required: true },
    dataNasc: { type: Date, required: true },
    ultMest: { type: Date, required: true },
    created: { type: Date, default: dataConvertida },
    modificed: { type: Date, default: dataConvertida }

})

module.exports = mongoose.model('User', UserSchema)