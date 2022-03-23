// так можно получить данные формы - ВАРИАНТ 1:
// eslint-disable-next-line no-undef
// const formFields = [...new FormData(formElem)];
// // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]
//
// const formData = formFields.reduce(function (acc, formField) {
//   const prop = formField[0]; // здесь "name" инпута
//   const value = formField[1]; // здесь "value" инпута
//   // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//   // const [prop, value] = formField;
//   return {
//     // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//     ...acc,
//     // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));



const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const emailErrorEl = document.querySelector('.error-text_email');
const passwordErrorEl = document.querySelector('.error-text_password');


const isRequired = value => value ? undefined : "Required";
const isEmail = value => value.includes("@") ? undefined : "Should be an email";

const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired]
}

const validate = (fieldName, value) => {
    const validators = validatorsByField[fieldName];
    return validators
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join(", ");
}

const onEmailChange = event => {
    const errorText = validate("email", event.target.value);

    emailErrorEl.textContent = errorText;
}

const onPasswordChange = event => {
    const errorText = validate("password", event.target.value);
    passwordErrorEl.textContent = errorText;
}


emailInputElem.addEventListener("input", onEmailChange)
passwordInputElem.addEventListener("input", onPasswordChange)


const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault()
    const formData = [...new FormData(formElem)]
        .reduce((acc, [name, value]) => ({...acc, [name]: value}), {})
    alert(JSON.stringify(formData))
}

formElem.addEventListener('submit', onFormSubmit)




//подробно

// algo
// formData => Object.fromEntries(new FormData(formElem))
// submit buttom => preventDefault =>  alert {formData}
// validation =>
// *Required
// *Email
// func errorMessage(fieldName, errorText)
// input add listener 'input'

// const inputEmailElem = document.querySelector('#email');
// const inputPasswordElem = document.querySelector('#password');
// const errorEmailElem = document.querySelector('.error-text_email');
// const errorPasswordElem = document.querySelector('.error-text_password');
// const formElem = document.querySelector('.login-form');
//
// // input: string ;  return: bollean
// const isEmail = value =>
//     value.includes('@') ? undefined : 'Should be an email';
//
// // input: string;   return: boolean
// const isRequired = value => (value ? undefined : 'Required');
//
// const onEmailChange = event => {
//     const errorText = [isEmail, isRequired]
//         .map(validator => validator(event.target.value))
//         .filter(el => el)
//         // input: [separator]
//         // return: arr.length ? string : void string
//         .join(', ');
//
//     errorEmailElem.innerHTML = errorText;
// };
//
// const onPasswordChange = event => {
//     const errorText = [isRequired]
//         .map(validator => validator(event.target.value))
//         .filter(el => el)
//         // input: [separator]
//         // return: arr.length ? string : void string
//         .join(', ');
//
//     errorPasswordElem.innerHTML = errorText;
// };
//
// inputEmailElem.addEventListener('input', onEmailChange);
// inputPasswordElem.addEventListener('input', onPasswordChange);
//
// const onSubmitForm = event => {
//     event.preventDefault();
//
//     const formData = Object.fromEntries(new FormData(event.target));
//     alert(JSON.stringify(formData));
// };
//
// formElem.addEventListener('submit', onSubmitForm);
//
//
//
//
//














