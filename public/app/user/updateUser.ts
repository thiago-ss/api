import UserService from '../services/userService.js'

const userService = new UserService()
let form = document.getElementById('form') as HTMLFormElement

const updateButton = document.getElementById('update-button')

updateButton.onclick = () => {
  userService.atualizaUsuario()
  form.reset();
}