import { Validator } from '../utils/validator.js'
import user from '../models/User.js'

class UserController {
  static listarUsuario = (req, res) => {
    user.find((err, user) => {
      res.status(200).json(user)
    })
  }

  static listarUsuarioPorId = (req, res) => {
    const id = req.params.id

    user
      .findById({ _id: id })
      .populate('name')
      .exec((err, user) => {
        if (err) {
          res.status(400).send({
            message: `Não foi possível encontrar usuário por id - ${err.message}`,
          })
        } else {
          res.status(200).send(user)
        }
      })
  }

  static cadastrarUsuario = (req, res) => {
    const {
      name,
      cpf,
      birthDate,
      email,
      password,
      address,
      number,
      complement,
      city,
      state,
      country,
      zipCode,
    } = req.body

    if (
      !name ||
      !cpf ||
      !birthDate ||
      !email ||
      !password ||
      !address ||
      !number ||
      !complement ||
      !city ||
      !state ||
      !country ||
      !zipCode
    ) {
      res.status(400).json({ message: 'Existem dados faltando' })
    }

    if (!Validator.validCpf(cpf)) {
      return res.status(400).json({ message: 'CPF é inválido.' })
    }

    let userr = new user(req.body)

    userr.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `Erro ao cadastrar usuário - ${err.message}` })
      } else {
        res.status(201).send(userr.toJSON())
      }
    })
  }

  static atualizarUsuario = (req, res) => {
    const id = req.params.id

    user.findByIdAndUpdate({ _id: id }, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `Erro ao atualizar usuário - ${err.message}` })
      } else {
        res.status(200).send({ message: 'Usuário atualizado com sucesso' })
      }
    })
  }

  static deletarUsuario = (req, res) => {
    const id = req.params.id

    user.findByIdAndDelete({ _id: id }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `Erro ao excluir usuário - ${err.message}` })
      } else {
        res.status(200).send({ message: 'Usuário removido com sucesso' })
      }
    })
  }
}

export default UserController
