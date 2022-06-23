import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

router
    .get('/api/v1/user', UserController.listarUsuario)

export default router;