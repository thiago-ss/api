import user from '../models/User.js';

class UserController {
    static listarUsuario = (req, res) => {
        user.find((err, user) => {
            res.status(200).json(user)
        });
    }

    static listarUsuarioPorId = (req, res) => {
        const id = req.params.id;
        
        user.findById(id)
        .populate('name')
        .exec((err, user) => {
            if(err) {
                res.status(400).send({message: `Não foi possível encontrar usuário por id - ${err.message}`})
            } else {
                res.status(200).send(user); 
            }
        })
    }

    static cadastrarUsuario = (req, res) => {
        let userr = new user(req.body);

        userr.save((err) => {
            if(err) {
                res.status(500).send({message: `Erro ao cadastrar usuário - ${err.message}`})
            } else {
                res.status(201).send(userr.toJSON());
            }
        });
    }
}

export default UserController;