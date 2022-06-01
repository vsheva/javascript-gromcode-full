const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
    const tasksElems = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);

            return listItemElem;
        });

    listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here

//1. add events to elements;
//2. write handlers;

const createBtn = document.querySelector(".create-task-btn");


//in: event; callback;
//out: undefined;

//callback
//in: event;
//out: undef

function createTaskHandler(event) {
    console.log(event)
    console.dir(event.target)
}

createBtn.addEventListener('click', createTaskHandler)




//Liza
//
// const tasks = [
//     { text: 'Buy milk', done: false },
//     { text: 'Pick up Tom from airport', done: false },
//     { text: 'Visit party', done: false },
//     { text: 'Visit doctor', done: true },
//     { text: 'Buy meat', done: true },
// ];
//
//
//
//
// const changeTaskStatus = (event) => {
//     const taskId = Number(event.target.dataset.id);
//     const currentTask = tasks.find((task) => task.id === taskId);
//     currentTask.done = !currentTask.done;
//     renderTasks(tasks);
// };
//
// listElem.addEventListener("click", changeTaskStatus);
//
// const addTasks = () => {
//     const inputElem = document.querySelector(".task-input");
//     const obj = {};
//     const newInput = inputElem.value;
//
//     if (!newInput) {
//         return;
//     }
//
//     obj.text = newInput;
//     obj.done = false;
//     obj.id = tasks.length + 1;
//     tasks.unshift(obj);
//     inputElem.value = "";
//     renderTasks(tasks);
// };
//
// buttonELem.addEventListener("click", addTasks);
