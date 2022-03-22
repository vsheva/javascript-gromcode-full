export function finishForm() {

    let formElem = document.querySelector('.login-form')
    let inputPas = document.querySelector('input')

    let inputLogin = document.createElement('input')
    //inputLogin.name = 'login'
    inputLogin.setAttribute('name', 'login')
    inputLogin.setAttribute('type', 'text')
    formElem.prepend(inputLogin)

    //inputPas.type = 'password'
    inputPas.setAttribute('type', 'password')
}


