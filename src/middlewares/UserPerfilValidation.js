const UserModel = require('../model/UserModel')
const { isPast } = require('date-fns')

function TestaCPF(strCPF) {
    var Soma
    var Resto
    var i
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}
const UserPerfilValidation = async (req, res, next) => {

    const { nome, cpf, sexo, cep, email, raca, dataNasc, ultMest } = req.body


    if (!nome)
        return res.status(400).send('nome é obrigatório')

    else if (!cpf)
        return res.status(400).send('cpf é obrigatório')

    else if (TestaCPF(cpf) === false)
        return res.status(400).send('cpf é inválido')

    else if (!sexo)
        return res.status(400).send('sexo é obrigatório')
    else if (!cep)
        return res.status(400).send('cep é obrigatório')
    else if (!email)
        return res.status(400).send('email é obrigatório')
    else if (!raca)
        return res.status(400).send('raca é obrigatório')

    else if (!dataNasc)
        return res.status(400).send('Data de Nascimento é obrigatório')

    else if (!ultMest)
        return res.status(400).send('Data da Última Menstruação é obrigatório')

    else {


        next()
    }


}
module.exports = UserPerfilValidation

