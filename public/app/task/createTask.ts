import { TaskService } from '../services/taskService.js'

const taskService = new TaskService()
let form = document.getElementById('form') as HTMLFormElement

const registerTaskButton = document.getElementById('register-task-button')

registerTaskButton.onclick = () => {
  taskService.adicionaTask()
  form.reset();
}

