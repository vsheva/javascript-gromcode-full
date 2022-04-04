import {renderTasks} from './renderer.js';
import {createTask, getTasksList} from './tasksGateway.js';

export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');

    const text = taskTitleInputElem.value;

    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';

    const newTask = {
        text,
        done: false,
        createDate: new Date().toISOString(),
        id: Math.random().toString(),
    };

    createTask(newTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            renderTasks(newTasksList);
        });


};