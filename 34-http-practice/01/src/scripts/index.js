import {initTodoListHandlers} from './todoList.js';
import {renderTasks} from './renderer.js';
import {createTask, getTasksList} from './tasksGateway.js';

document.addEventListener('DOMContentLoaded', () => {
    getTasksList().then((newTasksList) => {

            renderTasks(newTasksList);
        }
    )

    initTodoListHandlers();
});