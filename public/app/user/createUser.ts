import UserService from '../services/userService.js'

const userService = new UserService()
let form = document.getElementById('form') as HTMLFormElement

const registerButton = document.getElementById('register-button')

registerButton.onclick = () => {
  userService.adicionaUsuario()
  form.reset();
}

