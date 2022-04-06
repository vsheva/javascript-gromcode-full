'use strict'
//algo

//getting all DOM elements
//http request
// --- createUser (userData) => return fetch (method:POST)
// --- button add listener ("click", onHandleClick) or on form add listener("submit"
// --- onHandleClick (e) => create new Object
//                       => подписываемся на fetch с помощью: createUser(newData).then
//                       =>                     преобразуем js обьект в строку JSON с помощью JSON.stringify

//validation
//---allInputs add event Listener
//---onValidHandler (проверка методом reportValidity)
//--- removeAttribute
//--- setAttribute


//clearing the form using: createUser(newData).then(()=>{ emailInputElem.value = ''}


const url = 'https://61eaff907ec58900177cdb49.mockapi.io/api/v1/registration';

const emailInputElem = document.querySelector("#email");
const nameInputElem = document.querySelector("input[name='name']");
const passwordInputElem = document.querySelector("input[name='password']");
const registerButton = document.querySelector(".submit-button");
const loginForm = document.querySelector(".login-form")
const allInputs = document.querySelectorAll(".form-input")

//II
const onValidHandler = () => {
    if (loginForm.reportValidity() === true) {
        registerButton.removeAttribute("disabled")
    } else {
        registerButton.setAttribute("disabled", "")
    }
}

allInputs.forEach(element => element.addEventListener("input", onValidHandler))

//1. http-request
function createUser(userData) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
}

//3.
const onClickHandler = (e) => {
    e.preventDefault()
    let newData = {
        email: emailInputElem.value,
        name: nameInputElem.value,
        password: passwordInputElem.value,
    };

    createUser(newData)
        .then(data => alert(JSON.stringify(data)))
        .then(()=>{
                 emailInputElem.value = '';
                 nameInputElem.value = '';
                 passwordInputElem.value = '';
        })
}

//2. loginForm.addEventListener('submit', onClickHandler)
registerButton.addEventListener('click', onClickHandler)































































































































































































































//practice

// const loginForm = document.querySelector(".login-form")
// const emailInputElem = document.querySelector("#email")
// const nameInputElem = document.querySelector("input[name='name']")
// const passwordInputElem = document.querySelector("input[name='password']")
// const registerButton = document.querySelector(".submit-button")
// const allInputs = document.querySelectorAll(".form-input")
//
// //validation
//
// const isValid =() => {
//     if(loginForm.reportValidity() ===true ) {
//         registerButton.removeAttribute("disabled")
//     } else {
//         registerButton.setAttribute("disabled", "")
//     }
//
//
// }
//
// allInputs.forEach(element => element.addEventListener("input", isValid))
//
//
//
// const createUser = (userData) => {
//     return fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData)
//     })
//         .then(response => response.json())
// }
//
//
// const onSubmitHandler = (e) => {
//     e.preventDefault()
//     const newUserData = {
//         email: emailInputElem.value,
//         name: nameInputElem.value,
//         password: passwordInputElem.value,
//     }
//
//     createUser(newUserData)
//         .then(data=> alert(JSON.stringify(data)))
// }
//
//
//
// registerButton.addEventListener("click", onSubmitHandler)
//

































