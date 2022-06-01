//v1
// function buildObject(keysList, valuesList) {
//     const resObj = {};
//     for (let index = 0; index < keysList.length; index += 1) {
//         resObj[keysList[index]] = valuesList[index];
//     }
//     return resObj;
// }
//
// // examples
//

//v2
// function buildObject(keysList, valuesList) {
//     return valuesList.reduce((acc, key, i) => {
//         acc[keysList[i]] = key;
//         return acc;
//     }, {});
// }


//v3
// function buildObject(keysList, valuesList) {
//     return valuesList.reduce((acc, key, i) => {
//         acc[keysList[i]] = key;
//         return acc;
//     }, {});
// }

//v4
// function buildObject(keysList, valuesList) => valuesList.reduce((acc, key, i) => {
//         acc[keysList[i]] = key;
//         return acc;
//     }, {});

//
//
// // if code doesn't work, split by steps
//
//
// const keys= ['name', 'age', 'gender'];
// const values = ['Anna', '22', 'female'];
// const person =buildObject(keys, values)
// console.log(person)

//input: obj,obj
//return boolean

//1. get keys, get values
//2.check keys length
//3. compare every key/value with every method
//4. compare some key/value if some not equal - false
//function compareObj(obj1, obj2)

// function compareObjects(obj1, obj2) {
//    return JSON.stringify(obj1) === JSON.stringify(obj2)
// }




function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;

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
    name: 'Tom',
    age: 17,
};


console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true








// // // input: object, string, any
// // // output:obj
// function addPropertyV1(obj, key, value) {
//    obj[key]=value;
//    return obj;
// }
//
// function addPropertyV2(obj, key, value) {
//     //input: target obj, source obj
//     //output: target
//     const copy = Object.assign(obj, {[key]:value});
//     return copy;
// }
//
//
// function addPropertyV3(obj, key, value) {
//     //input: target obj, source obj
//     //output: target
//     return Object.assign({}, obj, {[key]: value});
// }
//
//
//
// function addPropertyV4(obj, key, value) {
//     //input: target obj, source obj
//     //output: target
//     return { ...obj, [key]: value};
// }
// //
// //
// //
// //
// // const product = {
// //     name: "TV",
// // };
// // const res = addPropertyV4(product, 'price', '200'); // ==> { value: 170, currency: 'USD' }
// // console.log(res)
// // const res2 = addPropertyV4(res, 'price', '0')
// // console.log(res2)
// // console.log(addPropertyV4(res2, 'color', 'white'))
// // console.log(product)
// //
// // let a= {name:"Valera"};
// // let b =a;
// // b = 5
// // console.log(a)
//
//
// let arr1 = [7, 14]
// let arr2= arr1
// console.log(arr2)