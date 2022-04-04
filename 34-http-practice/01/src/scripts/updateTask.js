import {renderTasks} from './renderer.js';
import {updateTask, getTasksList, deleteTask} from './tasksGateway.js';

const onDel = event => {
    const isDel = event.target.classList.contains('list-item__delete-btn');

    if (!isDel) {
        return;
    }
    const taskId = event.target.dataset.id;

    deleteTask(taskId)
        .then(() => getTasksList())
        .then(newTasksList => {
            renderTasks(newTasksList);
        });
};

const onChange = event => {
    const isCheckbox = event.target.classList.contains('list-item__checkbox');

    if (!isCheckbox) {
        return;
    }

    const taskId = event.target.dataset.id;

    const done = event.target.checked;
    const updatedTask = {
        done,
        finishDate: done ? new Date().toISOString() : null,
    };
    updateTask(taskId, updatedTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            renderTasks(newTasksList);
        });
};

export const onClickTask = event => {
    const isCheckbox = event.target.classList.contains('list-item__checkbox');
    const isDel = event.target.classList.contains('list-item__delete-btn');
    if (isCheckbox) {
        onChange(event);
    } else if (isDel) {
        onDel(event);
    }
};