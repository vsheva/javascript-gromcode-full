// localStorage.clear();
// localStorage.setItem('hobbies', JSON.stringify({name:"Tom"}));
//
// console.log(JSON.parse(localStorage.getItem('hobbies')))

localStorage.clear();
localStorage.setItem('hobbies', JSON.stringify({name:"Tom"}));
localStorage.setItem('name', JSON.stringify("Valera"));
localStorage.setItem('age', JSON.stringify(17));

//console.log(JSON.parse(localStorage.getItem('hobbies')))

export const getLocalStorageData =()=> {
    // for (let i=0; i<localStorage.length; i++) {
    //     localStorage.key(i)  //метод key(index)
    // }

   return  Object.entries(localStorage).reduce((acc, [key,value])=> {

           let newValue
           try {
             newValue = JSON.parse(value);
           } catch(e) {
               //переменной без парсинга присвоим сразу наше значение
               newValue = value;
           }


           return {
               ...acc,        //все значения acc
               //[key]: JSON.parse(value) //добавлять новый ключ//JSON.parse(value)
               [key]: newValue,
           };
       }, {});
};


console.log(getLocalStorageData())




// localStorage.setItem('hobbies', JSON.stringify({name:"Tom"}));
// localStorage.setItem('name', JSON.stringify("Valera"));
// localStorage.setItem('age', JSON.stringify(17));
//
//
//
// export const getLocalStorageData =()=> {
//
//     return  Object.entries(localStorage).reduce((acc, [key,value])=> {
//
//             let newValue
//             try {
//                 newValue = JSON.parse(value);
//             } catch(e) {
//                 newValue = value;
//             }
//
//             return {
//                 ...acc,
//                 [key]: newValue,
//             };
//         }, {});
// };
//
//
// console.log(getLocalStorageData())























































































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

