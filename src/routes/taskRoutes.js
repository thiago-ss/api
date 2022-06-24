import express from 'express';
import TaskController from '../controllers/taskController.js';

const router = express.Router();

router
    .get('/api/v1/task', TaskController.listarTask)
    .get('/api/v1/task/:id', TaskController.listarTaskPorId)
    .post('/api/v1/task', TaskController.cadastrarTask)
    .put('/api/v1/task/:id', TaskController.atualizarTask)
    .delete('/api/v1/task/:id', TaskController.deletarTask)

export default router;