//input: arr,callback
//output:filtered arr

//callback
//el
//boolean

//algo
//1.iterate arr
//2/apply callback to el
// if true - push to res arr;



// const filterArrayElements = (arr, callback) => {
//     const res = [];
//     for (let index = 0; index < arr.length; index += 1) {
//         if (callback(arr[index])) {
//             res.push(arr[index]);
//         }
//     }
//     return res;
// };
//
// //test data
// const filterArr = num =>num % 2 === 1;
// console.log(filterArrayElements([1, 2, 3, 4], filterArr));
//
// const arr = ["door", "speak", "dim"]
// const callback = el => el.includes("e")
// console.log(filterArrayElements(arr, callback))

// Arguments [5, 9, 4, 32] Псевдомассив - обьект, ключи которого индексы, а value = значения элементов
//0:5
//1:9
//2:4
//3:32

// console.log([...arguments])

//вычисляемое свойство
// const student = {
//     name:"Valera"
// }
// student["age"]=40
//
// const myCountryName= "country"
// student[myCountryName]="USA"
// console.log(student)


//
// const human = {
//     name:"Valera",
//     age:40
// }
//
// const woman = { ...human}
// woman.name="Sveta"
//
// console.log(human.name)
// console.log(woman.name)


// const human = {
//     name:"Valera",
//     age:40,
//     job: {
//         position:"developer"
//     },
//     run: function() {
//         console.log("GO")
//     }
// }

// const woman = JSON.parse(JSON.stringify(human))
// woman.name="Vika"
//
// console.log(human.name)
// console.log(woman.name)
// console.log(woman)


function sum (a,b) {
    return a+b
}
let result= sum(4,5)
console.log(result)

console.dir(sum)
console.log(sum.length)
console.log(sum.arguments)