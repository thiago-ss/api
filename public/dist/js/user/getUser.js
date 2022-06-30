import UserService from '../services/userService.js';
const userService = new UserService();
let form = document.getElementById('form');
const getButton = document.getElementById('get-button');
getButton.onclick = () => {
    userService.listaUsuario();
    form.reset();
};
//# sourceMappingURL=getUser.js.map