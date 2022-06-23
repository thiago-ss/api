import user from '../models/User.js';

class UserController {
    static listarUsuario = (req, res) => {
        user.find((err, user) => {
            res.status(200).json(user)
        });
    }
}

export default UserController;