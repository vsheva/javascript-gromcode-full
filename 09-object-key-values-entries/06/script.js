// rooms = {
//     room1: [
//         {name: "Jack"},
//         {name: "Andrew"},
//         {name: "Vasyl"},
//     ],
//
//     room2: [
//         {name: "Dan"},
//         {name: "Max"},
//         {name: "Roma"},
//     ],
//
//     room3: [
//         {name: "Val"},
//         {name: "Mika"},
//         {name: "Sam"},
//     ],
// }
//
//
// const getPeople = obj => {
//     return Object.values(obj).flat().map(item=>item.name)
//
// }
// console.log(getPeople(rooms))
//



//variant 1
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

//variant 1
// function compareObjects(obj1, obj2) {
//     const arr = Object.keys(obj1);
//     console.log(arr)
//     if (arr.length != Object.keys(obj2).length){
//         return false;
//     }
//     return arr.every(el => obj1[el] === obj2[el])
// }


//GOOD
// function compareObjects(obj1, obj2) {
//     const arrKeys = Object.keys(obj1);
//
//     if (arrKeys.length != Object.keys(obj2).length){
//         return false;
//     }
//     return arrKeys.every(el => obj1[el] === obj2[el])
// }

//variant 1
// function compareObjects(obj1, obj2) {
//     if (Object.keys(obj1).length != Object.keys(obj2).length) {
//         return false;
//     }
//
//     const result = Object.keys({ ...obj1, ...obj2 });
//     return result.every(key => obj1[key] === obj2[key]);
// }


//variant 1
// function compareObjects(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
//
//     const values1 = Object.values(obj1);
//     const values2 = Object.values(obj2);
//
//     const isKeysEqual = keys1.every((value, index) => value === keys2[index]);
//     const isValueEqual = values1.every((value, index) => value === values2[index]);
//
//     if (!isKeysEqual || !isValueEqual || keys1.length !== keys2.length) {
//         return false;
//     }
//
//     return true;
// }


//variant 1

// function compareObjects(obj1, obj2) {
//     const firstArrKeyVal = [...Object.keys(obj1), ...Object.values(obj1)];
//     const secondArrKeyVal = [...Object.keys(obj2), ...Object.values(obj2)];
//
//     if (!(firstArrKeyVal.length === secondArrKeyVal.length)) {
//         return false;
//     }
//
//     return firstArrKeyVal.every((value, index) => value === secondArrKeyVal[index]);
// }


//

// return !keys.some(key => obj1[key] === obj2[key])
// return keys.every((key) => obj1[key] === obj2[key])


// GOOD
// function compareObjects(obj1, obj2) {
//     return Object.keys({ ...obj1, ...obj2 }).every(element => obj1[element] === obj2[element]);
// }


//VARIANT 1
// function compareObjects(obj1, obj2) {
//     let arr = Object.entries(obj1).join() === Object.entries(obj2).join();
//
//     return arr;
// }



//GOOD
// function compareObjects(obj1, obj2) {
//     return Object.keys(obj1).length === Object.keys(obj2).length &&
//         Object.keys(obj1).every(key => obj1[key] === obj2[key]);
// }


//variant
function compareObjects(obj1, obj2) {

    const arr1 = Object.entries(obj1);
    const arr2 = Object.entries(obj2);

    if (arr1.length != arr2.length) {
        return false;
    }

    // return arr1.every(
    //   (arr, index) => arr[0] === arr2[index][0] && arr[1] === arr2[index][1]
    // );

    return !arr1.some(
        (arr, index) => arr[0] != arr2[index][0] || arr[1] != arr2[index][1]
    );
}


const obj1 = {
    name: 'Tom',
    age: 17,
};

const obj2 = {
    name: 'Bob',
    age: 17,
};

const obj3 = {
    name: 'Bob',
    age: 17,
    student: false,
};

const obj4 = {
    age: 17,
    name: 'Tom',
};


console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true