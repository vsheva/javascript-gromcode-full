export const baseUrl = 'https://61b09d973c954f001722a503.mockapi.io/api/v1//task';

export const getTasksList = () => fetch(baseUrl).then(respone => respone.json());
console.log(getTasksList());

export const createTask = taskData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData),
    });

export const updateTask = (taskId, updatedTaskData) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(updatedTaskData),
    });

export const deleteTask = taskId =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    });