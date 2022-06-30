import task from '../models/Task.js';

class TaskController {
    static listarTask = (req, res) => {
        const page = req.query.page || 1
        const perPage = 1
        task
        .find()
        .skip((page * perPage) - perPage)
        .limit(perPage)
        .exec((err, task) => {
            if(err) {
                res.status(400).send({message: `Não foi possível encontrar task - ${err.message}`})
            } else {
                res.status(200).json(task)
            }
        });
    }

    static listarTaskPorId = (req, res) => {
        const id = req.params.id;
        
        task.findById(id)
        .populate('user')
        .exec((err, task) => {
            if(err) {
                res.status(400).send({message: `Não foi possível encontrar task por id - ${err.message}`})
            } else {
                res.status(200).send(task); 
            }
        })
    }

    static cadastrarTask = (req, res) => {
        let taskr = new task(req.body);

        taskr.save((err) => {
            if(err) {
                res.status(500).send({message: `Erro ao cadastrar task - ${err.message}`})
            } else {
                res.status(201).send(taskr.toJSON());
            }
        });
    }

    static atualizarTask = (req, res) => {
        const id = req.params.id;

        task.findByIdAndUpdate(id, {$set: req.body}, err => {
            if(err) {
                res.status(500).send({message: `Erro ao atualizar task - ${err.message}`});
            } else {
                res.status(200).send({message: 'Task atualizada com sucesso'});
            }
        });
    }

    static deletarTask = (req, res) => {
        const id = req.params.id;
        
        task.findByIdAndDelete(id, err => {
            if(err) {
                res.status(500).send({message: `Erro ao excluir task - ${err.message}`});
            } else {
                res.status(200).send({message: 'Task removida com sucesso'});
            }
        });
    }
}

export default TaskController;