//algo

// import fetchUserRepos
// get DOM elements
//I. btn add eventListener ("click", handler)
//1. http fetch request
//2. handler (:
//   ----- fetch.then ({ renderUserData(data); fetchRepos(data)
//---------     .catch (error =>  alert("Failed to load data"))
//3. renderUserData(userData) =>const {avatar_url, name, location} = userData;
//userAvatarElem.src = avatar_url ....name, ...location

//spinner ----> устананавливаем перед подпиской на запрос  в handler onSearchUser
//        ----> a)отменяем spinner: делаем обязательным через .finally()
//              b) ложим его в callback()=>{spinnerElem.classList.add("spinner_hidden")},
//                    чтобы отработал в нужное время, иначе ошибка



import {fetchUserRepos} from "./src/fetchUserData.js"

const userAvatarElem = document.querySelector(".user__avatar")
const userNameElem = document.querySelector(".user__name")
const userLocationElem = document.querySelector(".user__location")
const inputNameElem = document.querySelector(".name-form__input")
const showButton = document.querySelector(".name-form__btn")
const spinnerElem = document.querySelector(".spinner")
const repoListElem = document.querySelector(".repo-list")
const defaultAvatarElem = "https://avatars3.githubusercontent.com/u10001"
userAvatarElem.src = defaultAvatarElem

//http-request
const fetchUserData = (userName) => {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
}

//render user data
const renderUserData = (userData) => {
    const {avatar_url, name, location} = userData;
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;
    userLocationElem.textContent = location ? `from ${location}` : "";
}


//onSearchUser
const onSearchUser = () => {
    spinnerElem.classList.remove("spinner_hidden")
    const userName = inputNameElem.value;


    fetchUserData(userName)
        .then(data => {
            renderUserData(data);
            fetchUserRepos(data);
        })
        .catch(err => alert("Failed to load data"))
        .finally(()=>{spinnerElem.classList.add("spinner_hidden")})

}


showButton.addEventListener("click", onSearchUser)





















































































































//practice

// import {fetchUserRepo} from './src/fetchUserData.js';
//
// const userNameInputElem = document.querySelector('.name-form__input');
// const showButtonElem = document.querySelector('.name-form__btn')
// const userAvatarElem = document.querySelector('.user__avatar');
// const spinnerElem = document.querySelector('.spinner');
// const userNameElem = document.querySelector('.user__name');
// const userLocationElem = document.querySelector('.user__location');
// userAvatarElem.src = 'https://avatars3.githubusercontent.com/u10001';
//
//
// //http-request
// const fetchUserData = (name) => {
//     return fetch(`https://api.github.com/users/${name}`)
//         .then((response) => response.json());
// }
//
// //render
// const renderUserData = (data) => {
//     const {avatar_url, name, location} = data;
//     userAvatarElem.src = avatar_url;
//     userNameElem.textContent = name;
//     userLocationElem.textContent = location ? `from ${location}` : '';
// };
//
//
// const onSearchUser = () => {
//     const userName = userNameInputElem.value;
//     spinnerElem.classList.remove('spinner_hidden');
//
//
//     fetchUserData(userName)
//         .then((userData) => {
//             renderUserData(userData);
//             fetchUserRepo(userData);
//
//         })
//         .catch(() => alert('Failed to load data'))
//         .finally(() => spinnerElem.classList.add('spinner_hidden'));
// };
//
//
// showButtonElem.addEventListener('click', onSearchUser);



















































