import UserService from '../services/userService.js';
const userService = new UserService();
let form = document.getElementById('form');
const registerButton = document.getElementById('register-button');
registerButton.onclick = () => {
    userService.adicionaUsuario();
    form.reset();
};
//# sourceMappingURL=createUser.js.map