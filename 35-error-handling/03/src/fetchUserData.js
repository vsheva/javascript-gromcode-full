//algo
// get DOM elements
//1. export fetchUserRepo (data)=>return fetch(data.repos_url)
//подписываемся: .then(response=>response.json).then(result=>renderUserRepos(result).
//               .catch((error) =>alert("Failed to load data"));

//2.  renderUserRepos (data) => data.map=> создаем DOM element=> DOM.innerHTML=repoUserString
// //spinner       a)отменяем spinner: делаем обязательным через .finally()
// //              b) ложим его в callback()=>{spinnerElem.classList.add("spinner_hidden")},
// //                    чтобы отработал в нужное время.


const spinnerElem = document.querySelector(".spinner")
const repoListElem = document.querySelector(".repo-list")

const renderUserRepos =(data) => {
         const repoUserArr = data.map(({name})=>`<li class="repo-list__item">${name}</li>`)
         const repoUserStr = repoUserArr.join(" ")
       repoListElem.innerHTML = repoUserStr;
}


export const fetchUserRepos = (data) =>{
    return fetch(data.repos_url)
        .then(response => response.json())
        .then(result=> renderUserRepos(result))
        .catch((error) =>alert("Failed to load data"))
        .finally(() =>spinnerElem.classList.add("spinner_hidden"))

}









































































































































































//practice

//1.
// const spinnerElem = document.querySelector('.spinner');
// const listElement = document.querySelector('.repo-list');
//
//  function renderRepoList(data) {
//     const reposListArr = data.map(({name}) => {
//
//         const listElem = document.createElement('li');
//         listElem.classList.add('repo-list__item');
//         listElem.textContent = name;
//         return listElem;
//     });
//
//      listElement.append(reposListArr);
// };
//
//
// export const fetchUserRepo = (userData) => {
//
//    return fetch(userData.repos_url)
//         .then((response) => response.json())
//         .then((data) => renderRepoList(data);)
//         .catch((e) => alert('Failed to load data'))
//         .finally(() => spinnerElem.classList.add('spinner_hidden'))
// }







//2.
//
//  const spinnerElem = document.querySelector('.spinner');
//  const listElement = document.querySelector('.repo-list');
//
//  function renderRepoList(userData) {
//     const reposListArr = userData.map(({name}) => `<li class="repo-list__item">${name}</li>  `)
//      const repoString = reposListArr.join(" ")
//     listElement.innerHTML = repoString;
// };
//
// export const fetchUserRepo = (userData) => {
//
//    return fetch(userData.repos_url)
//         .then((response) => response.json())
//         .then((data) => renderRepoList(data))
//         .catch((e) => alert('Failed to load data'))
//         .finally(() => spinnerElem.classList.add('spinner_hidden'))
// }

