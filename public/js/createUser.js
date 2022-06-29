import UserService from './services/userService.js'

const userService = new UserService()

const registerButton = document.getElementById('register-button')

registerButton.onclick = () => {
  userService.adicionaUsuario()
}
