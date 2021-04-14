const UserModel = require('../model/UserModel')
const { isPast } = require('date-fns')

const UserValidation = async (req, res, next) => {

    const { nome, cpf, senha, sexo, cep, email, raca, dataNasc, ultMest } = req.body

    if (!nome)
        return res.status(400).json({ error: 'nome é obrigatório' })

    else if (!cpf)
        return res.status(400).json({ error: 'cpf é obrigatório' })
    else if (!senha)
        return res.status(400).json({ error: 'senha é obrigatório' })
    else if (!sexo)
        return res.status(400).json({ error: 'sexo é obrigatório' })
    else if (!cep)
        return res.status(400).json({ error: 'cep é obrigatório' })
    else if (!email)
        return res.status(400).json({ error: 'email é obrigatório' })
    else if (!raca)
        return res.status(400).json({ error: 'raca é obrigatório' })
    else if (!dataNasc)
        return res.status(400).json({ error: 'Data de Nascimento é obrigatório' })
    else if (!ultMest)
        return res.status(400).json({ error: 'Data da Última menstruação é obrigatório' })

    else {

        let exists

        if (req.params.id) {
            exists = await UserModel.
                findOne(
                    {
                        '_id': { '$ne': req.params.id },
                        'cpf': { "$eq": cpf }
                    })



        } else {

            exists = await UserModel.
                findOne(
                    {

                        'cpf': { "$in": cpf }
                    })
        }
        if (exists) {
            return res.status(400).json({ error: 'CPF já cadastrado' })

        }



        next()
    }


}
module.exports = UserValidation

