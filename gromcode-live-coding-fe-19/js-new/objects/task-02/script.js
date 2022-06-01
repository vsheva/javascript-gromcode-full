

//
//
// function compareObjects(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
//     if (keys1.length !== keys2.length) {
//         return false;
//     }
//     for (let key of keys1) {
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }
//     return true;
//
// }
//
//
// const obj1 = {
//     name: 'Tom',
//     age: 17,
// };
//
// const obj2 = {
//     name: 'Bob',
//     age: 17,
// };
//
// const obj3 = {
//     name: 'Bob',
//     age: 17,
//     student: false,
// };
//
// const obj4 = {
//     name: 'Tom',
//     age: 17,
// };
//
//
// console.log(compareObjects(obj1, obj2)); // ==> false
// console.log(compareObjects(obj2, obj3)); // ==> false
// console.log(compareObjects(obj1, obj4)); // ==> true

//

function markAdmins(usersList, adminIds) {

    for (let el of adminIds) {
        for (let element of usersList) {
            if(element.id === el.id) {
          obj.map(obj => ({...obj, isAdmin:"true"}))
            }
        }
    }

}

// examples
const users = [
    { id: '1', name: 'Bob' },
    { id: '2', name: 'Tom' },
    { id: '3', name: 'Sam' },
    { id: '4', name: 'Tad' },
];
const adminIds = ['1', '3'];
markAdmins(users, adminIds);
