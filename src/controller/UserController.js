
const express = require('express');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

//const mailer = require('../../modules/mailer');
const authJWT = require('../credentials/auth-jwt.json');


const UserModel = require('../model/UserModel')

function generateToken(params = {}) {
    return jwt.sign(params, authJWT.secret, {
        expiresIn: 86400,
    });
}

class UserController {

    async create(req, res) {//telacadastro
        const user = new UserModel(req.body)
        await user
            .save()
            .then

            (response => {

                return res.status(200).json(response)

            })

            .catch(error => {
                return res.status(500).json(error)
            })

    }

    async update(req, res) {//editar perfil

        await UserModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json("error")
            })

    }



    async login(req, res) {
        const user = new UserModel()

        await UserModel.findOne({ 'cpf': { '$eq': req.params.cpf } })
            .then(response => {
                if (response) {

                    return res.status(200).send({
                        user,
                        token: generateToken({ id: user.id }),
                        cpf: response.cpf,
                        idUsuario: response._id,
                        nomeUsuario: response.nome

                    });
                }
                else
                    return res.status(404).json({ error: 'usuario não encontrado' })
            })
            .catch(error => {
                return res.status(500).json(error)
            })

    }

    async delete(req, res) {//tela perfil - excluir usuario e tarefas

        await UserModel.deleteOne({ '_id': req.params.id })
            .then(response => {

                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })

    }




}

module.exports = new UserController();