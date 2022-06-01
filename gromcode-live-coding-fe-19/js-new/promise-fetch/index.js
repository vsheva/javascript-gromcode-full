const formElem = document.querySelector(".login-form")

console.log("formElem created")
console.dir(new Date())

const serverUrl = "https://61eaff907ec58900177cdb49.mockapi.io/api/v1/users"

function createUserHandler(event) {
    //event.preventDefault()
    console.log("test")


    //validate
    //read form

    const user = {
        email: 'test@gmail.com',
        name: 'testUser',
        password: '123'

    }

    console.log(JSON.stringify(user)) //строка с JSON внутри

//in; url string, obj(options)
// out: promise

    const promise = fetch(serverUrl, {
        method: 'POST',
        headers: {

        },
        body: JSON.stringify(user),
    });

   //then
   //input: callback, callback(optional)
   //output:promise

   //callback
   //input: result of prev promise
   //output: any, обернутый в promise


    promise.then(res => {
        console.log("response is here")
        //in:  none
        //out: promise
        return res.json();
    })
        .then(body => {
                console.log("body is read")

                console.log(body)
            }
        )


}


formElem.addEventListener("submit", createUserHandler)
console.log("listener added")


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



























