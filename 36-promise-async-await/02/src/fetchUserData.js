//algo в 35 уроке, задача 3
//добавлен async-await

const spinnerElem = document.querySelector(".spinner")
const repoListElem = document.querySelector(".repo-list")

const renderUserRepos =(data) => {
         const repoUserArr = data.map(({name})=>`<li class="repo-list__item">${name}</li>`)
         const repoUserStr = repoUserArr.join(" ")
       repoListElem.innerHTML = repoUserStr;
}


export const fetchUserRepos = async (userData) =>{

    try{
       const response = await fetch(userData.repos_url)
        const datas = await response.json()
        renderUserRepos(datas)
    }
    catch(err){
        alert("Failed to load data")
    }finally {
        spinnerElem.classList.add("spinner_hidden")
    }



    // return fetch(data.repos_url)
    //     .then(response => response.json())
    //     .then(result=> renderUserRepos(result))
    //     .catch((error) =>alert("Failed to load data"))
    //     .finally(() =>spinnerElem.classList.add("spinner_hidden"))

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

