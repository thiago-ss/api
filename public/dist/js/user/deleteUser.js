import UserService from '../services/userService.js';
const userService = new UserService();
let form = document.getElementById('form');
const deleteButton = document.getElementById('delete-button');
deleteButton.onclick = () => {
    userService.deletaUsuario();
    form.reset();
};
//# sourceMappingURL=deleteUser.js.map