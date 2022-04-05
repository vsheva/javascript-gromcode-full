'use strict'
const url = 'https://61eaff907ec58900177cdb49.mockapi.io/api/v1/registration';

const emailInputElem = document.querySelector("#email");
const nameInputElem = document.querySelector("input[name='name']");
const passwordInputElem = document.querySelector("input[name='password']");
const registerButton = document.querySelector(".submit-button");
const loginForm = document.querySelector(".login-form")
const allInputsElems = document.querySelectorAll(".form-input")

//II
const isValid = () => {
    if (loginForm.reportValidity() === true) {
        registerButton.removeAttribute("disabled")
    } else {
        registerButton.setAttribute("disabled", "")
    }
}

allInputsElems.forEach(element => element.addEventListener("click", isValid))



//1.
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
const onClickHandler = () => {
    let newData = {
        email: emailInputElem.value,
        name: nameInputElem.value,
        password: passwordInputElem.value,
    };

    createUser(newData)
        .then(data => alert(JSON.stringify(data)))
}

//2.
registerButton.addEventListener('click', onClickHandler)












































