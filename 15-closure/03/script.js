"use strict";
function createLogger() {
  //создаем память memory в виде массива
  let memory = [];
  let obj = {};
  const warn = (text) => {
    //cоздание обьекта, со свойствами, пушим в массив, возвращаем массив
    obj = {};
    obj.message = text;
    obj.type = "warn";
    obj.dateTime = new Date();
    memory.push(obj);
    return memory;
  };

  const error = (text) => {
    obj = {};
    obj.message = text;
    obj.type = "error";
    obj.dateTime = new Date();
    memory.push(obj);
    return memory;
  };

  const log = (text) => {
    obj = {};
    obj.message = text;
    obj.type = "log";
    obj.dateTime = new Date();
    memory.push(obj);
    return memory;
  };

  const getRecords = (type) => {
    //1.если не передан аргумент тип в функцию gerRecords(), сортируем по убыванию
    if (!type) {
      return memory.sort((a, b) => b.dateTime - a.dateTime);
    }

    //2. если в память memory ничего не передано
    if (memory.length === 0) {
      return [];
    }

    //algo
    //3. если передано "log", "error" или "warn"
    //a. фильтруем массив memory и сравниваем введенный type со значением  свойства обьекта type из memory
    // (type === elem.type of memory)  => отбираются подходящие элементы в новый массив
    //b. фильтрованные элементы массива сортируем по убыванию времени и возвращаем
    //c. в противном случае возвращаем пустой массив

    let filteredArray = memory.filter((elem) => type === elem.type);
    if (filteredArray.length) {
      return filteredArray.sort((a, b) => b.dateTime - a.dateTime);
    }
  };

  return {
    warn,
    error,
    log,
    getRecords,
  };
}

// examples
const logger1 = createLogger();
logger1.log("User logged in");
logger1.warn("User is tring to ented restricted page");
logger1.error("Unexpected error on the site");

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]
console.log(logger1.getRecords("log")); // ===> [{ message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords("error")); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords("warn")); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

// const logger2 = createLogger();
// logger2.warn('Opps, something is happenning');
// logger2.getRecords('error');                              // ===> []
// logger2.getRecords('warn');                              // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
// logger2.getRecords();

// let createCalculator = ()=> {
//     let memory=0
//
//     function add (number) {
//         return memory+=number
//     }
//
//     function decrease (number) {
//         return memory-=number
//     }
//
//     function reset (number) {
//         return memory=0
//     }
//
//     function getMemo(number) {
//         return memory
//     }
//
//     return {
//         add,
//         decrease,
//         reset,
//         getMemo
//     }
// }
//
//
//
// let createLogger = () =>{
//
//
//     return {
//         warn,
//         error,
//         log,
//     }
// }
//

//------------------------------------------------------------------

// function createMessenger() {
//     let message = 'Just learn it';
//     let sender = 'Gromcode';
//
//     function sendMessage(name) {
//         console.log(`Hello, ${name}! ${message}! This message was sent by ${sender}`)
//     }
//
//     function setMessage(text) {
//         message = text;
//     }
//
//     function setSender(newSender) {
//         sender = newSender;
//     }
//
//     return {
//         sendMessage,
//         setMessage,
//         setSender,
//     }
// }
//
// const messanger1 = createMessenger();
// messanger1.sendMessage('Anna'); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode
//
// const messanger2 = createMessenger();
// messanger2.setMessage('You are learning JS and you do it well');
// messanger2.sendMessage('Michael');
