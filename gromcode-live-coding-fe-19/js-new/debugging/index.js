// const formElem = document.querySelector('.login-form');
// const submitBtnElem = document.querySelector('.submit-button');
//
// const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';
//
// const onInputChange = () => {
//   const isValidForm = formElem.reportValidity();
//   if (isValidForm) {
//     submitBtnElem.removeAttribute('disabled');
//   } else {
//     submitBtnElem.setAttribute('disabled', true);
//   }
// };
//
// formElem.addEventListener('input', onInputChange);
//
// const onFormSubmit = event => {
//   event.preventDefault();
//
//   const userData = Object.fromEntries(new FormData(formElem));
//
//   // the same with reduce
//   // const formData = [...new FormData(formElem)]
//   //     .reduce((acc, [prop, value]) => ({ ...acc, [prop]: value }), {});
//
//   return fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(userData),
//   })
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//       alert(JSON.stringify(data));
//       formElem.reset();
//     });
// };
//
// formElem.addEventListener('submit', onFormSubmit);
//
//







// var a= 5;
// const b=(arg)=> {
//   console.log("arg", arg+5)
//  a=10
// }
// b(a)

//
// var num = 10;
//
// function fnB() {
//
//   console.log(num);
//   num = 20;
// }
//
// fnB();
//
//
// var num = 10;
//
// function fnB() {
// //
// //   console.log(num);
// //   var num = 20;
// // }
// //
// // fnB();



// for (var i = 0; i < 3; i++) {
//   var j = i * 2;
// }
// console.log(i); // 3
// console.log(j); // 4
//
// for (let k = 0; k < 3; k++) {
//   let l = k * 2;
// }
// console.log(typeof k); // undefined
// console.log(typeof l); // undefined

//alert( 0 == false ); // true





//ПРАКТИКОВАТЬСЯ ДЕБАЖИТЬ КОД !!!!!!!

//  Как работать с ошибками:
// * понять точку входа кода -> цепочку вызова кода  (из всего проекта выдлить
// ту часть кода в рамках данного бага - отсечь лишнее). Когда эту часть кода нашли,
// можно начинать дебажить (те найти четкое место в коде, где что-то пошло не так)

// не работает кнопка:
// ---в каком файле лежит,в какой компоненте,
//--- что на кнопку навешано, какие обработчики (те. при нажатии на кнопку сработает такая функция
//---что происходит после вызова обработчика
// --- те первый дебаггер поставим там
//  ---- потом по этому обработчику смотрим, что у него внутри, часто этот обработчик вызывает другие функции
// -- и потом пошла вложенная матрешка

//1. понять точку входа кода -> цепочку вызова кода
//2. дебажим каждый шаг цепочки
//3. локализировать проблему

//4. FIX


// - делать точки остановы
//-уметь оценивать все значения
//-прыгать между точками остановы

//scope - собраны все переменные и разбиты по скоупам (локальный, скриптовый, глобальный)
















//=============================================================
//sobes

//мутирущие методы массивов - push, pop, unshift, shift, sort, reverse, splice

// как добавить key-value  в обьект

// через точку:  не рекомендуется. Когда не сработает ? 1)когда у нас ключ несколько слов 2) computed value

// через квадратные скобки
//Obj. assign
//Spread

//Методы обьектов
//in:
//out:
//Obj.Entries

//Obj.assign
// для копирования и для создания нового обьекта с ключами и значениями обьединенными
//in: target, ...resources - другие обьекты
// аналог: Spread operator
//Obj.assign преимуществ не имеет преимуществ перед Spread operator  //неглубокая копия

//Deep Copy Object - отличие от обычной copy
//обьект, в нем методы, а в нем новые обьекты
//1
//var oldObject = { name: 'A', address: { street: 'Station Road', city: 'Pune' } }
//var newObject = JSON.parse(JSON.stringify(oldObject)); // Все function внутри обьекта уйдут и когда обьект без null, undefined, так как они при превращении в строку выдаист не то

//2 создать рекурсивную функцию
//Минусы - сложный код, так как самому все писать (тк есть библиотеки, которые это все решают)

//3 применить библиотеку lodash
// Удобство - использовать готовый код
//Минусы: если подключаешь целую библиотеку для решения такого вопроса, то NOT OK
//БИБЛИОТЕКА LODASH лучше всего

// КЛАССЫ
//шаблон кода для создания обьектов
// зачем нужны: для определения изначального значения, чтобы расширять
// class User vs object User
//Преимущество классов:

//1) делаем сколько хотим User ов - reusability
//2) прототипное наследование - в одном классе использовать методы другоко класса
//3) упрощенная реализация наследования (а не через __proto__)
//4)в классах испльзуется автоматически "use strict"
//5) инкапсуляция: (приватные и защитные свойства)
//6) выгоднее с точки зрения памяти

// можем ли обойтись без классов и почему
//Да, так как ООП главенствует. JS - это функц-ориент. программирование. Так как все функции внутри класса можно писать и не внутри класса( например, React)
//Если можно без него, зачем он нужен. - Парадигма ООП(в центре обьект).Есть функиональный подход - в центре функция. Для разного типа задач подходит разное
// Классы дают возможность писать языка как ООП, но лучше функциональный.

// для фронта - функциональный  // - для бэкэнда - обьекьтные подход.   // Это просто расширяет возможности языка
//в класс - просто упрощает. Он похож на функцию.
//Классы - это шаблон для создания обьектов. Класс -  это спец.функция.(?)
// класс - это шаблон
// констуруктор - функция, создаюшая обект

// class instance - это обьект,
// Который создан на основе класса,у которого есть все методы
// и свойства этого класса
// с помощью new и constructor

// функция конструктор (в классе) ?

// что такое прототип -  это обьект, который наследуется от предущих и хранится в самом обьект
// значение ключа __proto_ - значение pr









//подготовка к собесу

// const filterd= (elem, index, array)=>{
//   return elem>10
// }
//
// console.log([1,25, 434, 5].every(filterd))

// const people= [
//   {name: 'John', age: 17, budget:1000},
//   {name: 'Valerii', age: 40, budget:25000},
//   {name: 'Artem', age: 12000, budget:12000},
// ]
//
// const newPeople =people.map(person=>{
//   return {
//     info:`${person.name}`,
//     budget:person.budget
//   }
// })
//
// console.log(newPeople)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//
//
// const newFruit=fruits.splice(1, 0, "Lemon", "Kiwi");
// console.log(newFruit);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//
// // At position 2, add 2 elements:
// const newFruit=fruits.slice(1, 3);
// console.log(newFruit);




// const adults= people.filter(peron=> peron.age>18)
// console.log(adults)

// const amount = people.reduce((total, person)=>total+person.budget, 0)
// console.log(amount)

// const studentIndex = people.findIndex(person=> person.name==="Valerii")
// console.log(studentIndex)

// const student= {
//   name: "Valera",
//   age:40
// }
//
// //console.log(Object.keys(student))
//
// for(let key in student)
// { console.log(student[key]) }

// const animal = {}
// const dog = Object.create(animal)
// console.log(dog)


// const target = { a: 1, b: 2 };
// const me={ age:20}
// const newOb= {name:"Valera"}
//
// const returnObj= Object.assign(newOb,target, me)
// console.log(returnObj)

// const orgObject = { company: 'ABC Corp' }
// const carObject = { carName: 'Ford' }
// const employee= Object.assign({},orgObject, carObject)
// console.log(employee)

// const orgObject = { company: 'ABC Corp' }
// const carObject = { carName: 'Ford' }
// //console.log(Object.assign(orgObject,{age:5}))
//
// const newObject= {...carObject, name:"Valera"}
// console.log(newObject)


// let obj = {
//   name: 'scotch.io',
//   exec: function exec() {
//     console.log("hello")
//   },
// }
//
// let method1 = Object.assign({}, obj);
// console.log(method1)

// let obj = {
//   name: 'scotch.io',
//
// }
//
// delete obj.name
// console.log(obj)

// function first(){
//   let a=0
//   return function second(){
//     return a++
//   }
// }
//  const func = first()
// const func2 = first()
// console.log(func())
// console.log(func())
// console.log(func())
// console.log(func2())


//
// console.log(this);
//
// // в консоль выводится объект Window
// // Window { postMessage: ƒ,
// // blur: ƒ,
// // focus: ƒ,
// // close: ƒ,
// // frames: Window, …}
//
// function myFunction() {
//   console.log(this);
// }
//
// // Вызовем функцию
// myFunction();
//
// // функция выводит тот же объект Window!
// // Window { postMessage: ƒ,
// // blur: ƒ,
// // focus: ƒ,
// // close: ƒ,
// // frames: Window, …}


// function test() {
//   console.log('hello world');
//   console.log(this);
// }
//
// test();


//
// const company = {
//   f1: () => { // стрелочная функция
//     console.log(this);
//   },
//   // f2() { // обычная функция
//   //   console.log(this);
//   // },
// };
//
// company.f1(); // undefined
// // company.f2();

//==================================================================
//1.BOM - то что, позволяет JS общаться с браузером
//что входит в BOM: window, location, navigation, history
// это обьекты, к-ые помогают взаимодействовать с браузером

//2. DOM - позволяет документ HTML представитьб в виде дерева узлов, чтобы
// вставлять, удалять элементы

//3. StopPropagation - останавливет процесс всплытия
//4. delegation (TODO list)

//5. Методы обьекта class - статические и нестатичесие
// toString(), constructor, Object.entries(), Object.keys(), Object.assign(), Object.values()
// from.entries(), hasOwnProperties() - есть ли у обьекта какое-то поле

//6. __proto__ & prototype  ---
// __proto__ - это ссылка внутри обькта, есть у всех
//prototype - есть не у всех (только у классов, функций и у функций коынструкторов)

//7. high ordered function - функции высшего пордка (принимает или возврашает функуцию)
//filter, map, reduce
//замыкания (когда не удаляется: setTimeout())
//  function counter(){}

//7. lexical environment и scope - разница (видео - 45 минута видео)
// появляется , исчезает
// scope - это просто область видимости,глобал, локал функиональный и локал блочный, указывает доступность переменных (где видно или нет)
//lexica environment -  внутренний обект (record и ссылка)то что мы можем видеть во время выполнения ф-ии
// разница - исчезает сразу , а скопе виден всегда и везде
//
//8. образуется когда ? (видео 52-54 минута) - при вызове функции

//9. this - контекст, тот обьект, который привязан за функции
//позволяет использовать обьект, его свойства и методы

//10. потеря контекста:
//---выклик метода в переменную
// --- nested function
//--- в callbackах this теряется - никто не владеет вызовом функции, у этого this

//11. bind  - приенимает (this и аргументы)
// возврашает новую функцию
// видео -1.24 - так как bindим не только контест, но и аргументы

// function sum (a,b) {
//   return a+b
// }
//
// const bindedSum = sum.bind(obj, 10, 50)
// console.log(bindedSum(20))

//12. typeof arr - object
// typeof function - func

//13. замержиит 2 массив
// ---- spread, concat, push
// видео 1 час 28 минут

// const arr1=[1,2]
// const arr1=[1,2]
// arr1.push(...arr2)

//14. map поменял длинну результирующего массива
// если не будет элемента- undefined

//15. LIVE CODING (01:32)
// const arr =[]
// arr[10]=hello
// console.log(arr) // 10 пустых и "hello"
//
// const {userName, city}= obj

//16.найти значение page
//(видео 1:45:00 )
//уточнить задание (!)
//algo
//-----

//const locationUrl = 'orderField=id&page=22&orderMode=desc&status=1';


  // разделить по амперсанту
  // найти елемент с строкой page
  // разделить по '='
  // взять второй єлемент


//(видео 01:55:00) алгоритм Сергея user

//v1
// const getPage = url =>
//     url
//         .split('&')
//         .find(el => el.indexOf('page') !== -1)
//         .split('=')[1];




//v2 (видео 02:00:06)
// верное решение
// const getPage = url =>
//     url
//         .split('&')
//         .find(el => el.includes('page'))
//         .split('=')[1];
//
// console.log(getPage());


//17. асинхронность - 02:08:00 (ответ из тест собеса)
// любой запрос на сервер

//18. callback - функция вложенная как аргумент в другую функцию, которая будет вызываться
// зачем нужны - мы можем функцию передать в функцию, которая ее использует
// callback очень сильно расширяют возможности функций(без них функция

//19. отличие localStorage (браузер) и coocie( браузер и сервер) (видео 02:16:00)
// по размеру: localStorage  и cookies


//bad
// console.log(locationUrl.slice(locationUrl.indexOf('page'),
//     locationUrl.indexOf('&o')));


//это в крови
//алгоритм  --- выбрать правильный алгоритм
//код
//тестирование



