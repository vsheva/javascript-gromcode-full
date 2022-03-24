//algo
//1.прибавить
//2. какой день недели

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "St"]
export const dayOfWeek = (date, days) => {
    // какой день по порядку в месяце
    const day = new Date(date).getDate()
    // к этому дню прибавили новое количество дней
    const dateInFuture = new Date(date).setDate(day + days)

    //2. к-й день нед.
    return  weekDays[new Date(dateInFuture).getDay()];
}

//01.01.2022
let result =  dayOfWeek(new Date(2022, 0, 1), 15)
//result: setDate возвращает time stamp
console.log(result)





































































































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

