import { TaskService } from '../services/taskService.js';
const taskService = new TaskService();
let form = document.getElementById('form');
const getTaskButton = document.getElementById('get-task-button');
getTaskButton.onclick = () => {
    taskService.listaTask();
    form.reset();
};
//# sourceMappingURL=getTask.js.map