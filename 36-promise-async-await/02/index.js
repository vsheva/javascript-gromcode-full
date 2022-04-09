//algo в 35 уроке, задача 3
//добавлен async-await

import { fetchUserRepos } from './src/fetchUserData.js';

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const inputNameElem = document.querySelector('.name-form__input');
const showButton = document.querySelector('.name-form__btn');
const spinnerElem = document.querySelector('.spinner');
const repoListElem = document.querySelector('.repo-list');
const defaultAvatarElem = 'https://avatars3.githubusercontent.com/u10001';
userAvatarElem.src = defaultAvatarElem;

const fetchUserData = async userName => {
  const response = await  fetch(`https://api.github.com/users/${userName}`);
  const data = await response.json();
  return data;
};

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

const onSearchUser = async () => {
  spinnerElem.classList.remove('spinner_hidden');
  const userName = inputNameElem.value;

  try {
    const data = await fetchUserData(userName);
    fetchUserRepos(data);
    renderUserData(data);
  } catch (e) {
    alert('Failed to load data');
  } finally {
    spinnerElem.classList.add('spinner_hidden');
  }

  // fetchUserData(userName)
  //     .then(data => {
  //         renderUserData(data);
  //         fetchUserRepos(data);
  //     })
  //     .catch(err => alert("Failed to load data"))
  //     .finally(()=>{spinnerElem.classList.add("spinner_hidden")})
};

showButton.addEventListener('click', onSearchUser);



































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
