import UserService from '../services/userService.js'

const userService = new UserService()
let form = document.getElementById('form') as HTMLFormElement

const deleteButton = document.getElementById('delete-button')

deleteButton.onclick = () => {
  userService.deletaUsuario()
  form.reset();
}