import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

router
    .get('/api/v1/user', UserController.listarUsuario)
    .get('/api/v1/user/:id', UserController.listarUsuarioPorId)
    .post('/api/v1/user', UserController.cadastrarUsuario)

export default router;