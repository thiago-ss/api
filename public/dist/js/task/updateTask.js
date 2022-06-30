import { TaskService } from '../services/taskService.js';
const taskService = new TaskService();
let form = document.getElementById('form');
const updateButton = document.getElementById('update-task-button');
updateButton.onclick = () => {
    taskService.atualizaTask();
    form.reset();
};
//# sourceMappingURL=updateTask.js.map