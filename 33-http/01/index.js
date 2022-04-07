// algo
//get all DOM elements
// listener to buttonElem
// http request:  fetchUserData(userName) => return fetch.then(response =>repsonse.json()

// fetchUserData(userName).then(renderUserData(userData))

//renderUserData(userData) => to each element

const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");
const inputFormElem = document.querySelector(".name-form__input");
const buttonElem = document.querySelector(".name-form__btn");

const defaultAvatar = 'https://avatars3.githubusercontent.com/u1001';
userAvatarElem.src = defaultAvatar

//http request
const fetchUserData = (name) => {
    return fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json())
}
//render
const renderUserData = (userData) => {
    console.log(userData)
    const {avatar_url, name, location} = userData
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;
    userLocationElem.textContent = location ? `from ${location}` : "";
}

//onSearch
const onSearchUser = () => {
    const userName = inputFormElem.value
    fetchUserData(userName ).then(userData => renderUserData(userData))
}

buttonElem.addEventListener("click", onSearchUser)

































































// const userAvatarElem = document.querySelector('.user__avatar');
// const userNameElem = document.querySelector('.user__name');
// const userLocationElem = document.querySelector('.user__location');
// const showUserBtnElem = document.querySelector('.name-form__btn');
// const userNameInputElem = document.querySelector('.name-form__input');
//
//
// const defaultAvatar = 'https://avatars3.githubusercontent.com/u1001';
// userAvatarElem.src = defaultAvatar;
//
// //2.
// const fetchUserData = userName => {
//     return fetch(`https://api.github.com/users/${userName}`)
//         .then(response => response.json());
// }
//
// //3.
// const renderUserData = userData => {
//     const {avatar_url, name, location} = userData;
//     userAvatarElem.src = avatar_url;
//     userNameElem.textContent = name;
//     userLocationElem.textContent = location ? `from ${location}` : '';
// };
//
// //1-a.
// const onSearchUser = () => {
//     const userName = userNameInputElem.value;
//     fetchUserData(userName).then(userData => renderUserData(userData));
// };
// //1.
// showUserBtnElem.addEventListener('click', onSearchUser);


