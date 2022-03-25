//algo (with ID)
//-add id to object
//-tasksList.map(({text, done, id})
//-checkbox.setAttribute('data-id', id);

const listElem = document.querySelector('.list');
const createBtnElem = document.querySelector('.create-task-btn');
const input = document.querySelector('.task-input');

const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
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

//algo
//1. addTask
//- addEventListener("click", handler)
//handler:
// ---- (if false=> return)
// ---- create newTask object (text: inputElem.value, done:false; id:)
// ---- tasks.push  task
// ---- clear inputElem.value
// ---- renderTasks(tasks)

//2. toggleTask(event)

// - addEventListener('click', toggleTask);
//handler:
//---tasks.forEach((task) => if (task.id === +event.target.dataset.id) {
//--- if (task.done===false) task.done=true and reverse
//---renderTasks(tasks)

const addTask = () => {
  if (!input.value) {
    return;
  }
  const newTask = {
    text: input.value,
    done: false,
    //date.stamp (ms from 01.01.1970)
    //new Date(1900, 2).getTime() //-2221432423542
    //getFullYear() getDate() ..день месяца getDay() .. номер дня недели
    //setMonth(0,11)
    //setDay(0,6)
    id: Date.now(),
  };
  tasks.push(newTask);
  input.value = '';
  renderTasks(tasks);
};

createBtnElem.addEventListener('click', addTask);

const toggleTask = event => {
  tasks.forEach(task => {
    if (task.id === +event.target.dataset.id) {
      if (task.done === false) {
        task.done = true;
      } else {
        task.done = false;
      }
    }
  });

  renderTasks(tasks);
};

listElem.addEventListener('click', toggleTask);


























// const renderTasks = listItems => {
//     const list = document.querySelector(".list")
//
//     const listItemElems = listItems.map(itemText=> {
//         const liElem= document.createElement("li")
//         liElem.classList.add("list__item")
//         liElem.append(itemText)
//
//         return  liElem
//     })
//
//     list.append(...listItemElems)
// }
//
// renderTasks(tasks)
