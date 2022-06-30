import UserService from '../services/userService.js'

const userService = new UserService()
let form = document.getElementById('form') as HTMLFormElement

const getButton = document.getElementById('get-button')

getButton.onclick = () => {
  userService.listaUsuario()
  form.reset();
}