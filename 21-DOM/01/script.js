export const tasks = [
    {text: 'Buy milk', done: false},
    {text: 'Pick up Tom from airport', done: false},
    {text: 'Visit party', done: false},
    {text: 'Visit doctor', done: true},
    {text: 'Buy meat', done: true},
];


const renderTasks = tasksList => {
    const elemList = document.querySelector('.list');


    const elements = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({text, done}) => {
            const ellListItem = document.createElement('li');
            const checkbox = document.createElement('input');

            ellListItem.classList.add('list__item');
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                ellListItem.classList.add('list__item_done');
            }
            checkbox.setAttribute('type', 'checkbox');
            checkbox.checked = done;

            ellListItem.append(checkbox, text);

            return ellListItem;
        });

    elemList.append(...elements);
};

renderTasks(tasks);

















































































































// 'use strict';
//
//  export const tasks = [
//     { text: 'Buy milk', done: false },
//     { text: 'Pick up Tom from airport', done: false },
//     { text: 'Visit party', done: false },
//     { text: 'Visit doctor', done: true },
//     { text: 'Buy meat', done: true },
// ];
//
// const renderTasks = (tasksList) => {
//     const listElem = document.querySelector('.list')
//
//     const listItemsElems = tasksList
//         .sort((a, b) => a.done - b.done)
//         .map(({text, done}) => {
//
//             const listItemElem = document.createElement('li')
//             listItemElem.classList.add('list__item');
//             if(done) {
//                 listItemElem.classList.add('list__item_done');
//             }
//
//             const checkboxElem = document.createElement('input')
//             checkboxElem.setAttribute('type', 'checkbox')
//
//             checkboxElem.checked = done;
//             checkboxElem.classList.add("list__item-checkbox");
//
//             listItemElem.append(checkboxElem, text)
//             return listItemElem
//         });
//
//     listElem.append(...listItemsElems)
// };
//
// renderTasks(tasks)

