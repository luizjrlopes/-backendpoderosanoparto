const mongoose = require('../config/database')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    nome: { type: String, required: true },
    cpf: { type: Number, required: true },
    senha: { type: String, required: true, select: false },
    TokenRetarSenha: { type: String, select: false },
    ExpiraResetSenha: { type: Date, select: false },
    sexo: { type: String, required: true },
    cep: { type: Number, required: true },
    email: { type: String, required: true },
    raca: { type: String, required: true },
    dataNasc: { type: Date, required: true },
    ultMest: { type: Date, required: true },
    created: { type: Date, default: Date.now() },
    modificed: { type: Date, default: Date.now() }

})

module.exports = mongoose.model('User', UserSchema)