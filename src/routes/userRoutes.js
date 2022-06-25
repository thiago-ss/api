import express from 'express'
import UserController from '../controllers/userController.js'

const router = express.Router()

router
  .get('/api/v1/user', UserController.listarUsuario)
  .get('/api/v1/user/:id', UserController.listarUsuarioPorId)
  .post('/api/v1/user', UserController.cadastrarUsuario)
  .put('/api/v1/user/:id', UserController.atualizarUsuario)
  .delete('/api/v1/user/:id', UserController.deletarUsuario)

export default router
