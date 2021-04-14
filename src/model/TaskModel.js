const mongoose = require('../config/database')
const Schema = mongoose.Schema


const TaskSchema = new Schema({
    titulo: { type: String, require: true },
    cpf: { type: Number, required: true },
    duracao: { type: String, require: true },
    finalizada: { type: Date, require: true },
    usuarioDaTarefa: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

});

module.exports = mongoose.model('Task', TaskSchema)