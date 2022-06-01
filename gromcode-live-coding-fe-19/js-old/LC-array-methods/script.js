"use strict"
const numbersList1 = [1,2,3,4,5];
// const numbersList2 = new Array(1,2,3,4);
// console.log(numbersList2);

console.log(numbersList1)

//1.pop -удаляет последний элемент
//input: none
//return: number

const res= numbersList1.pop();
console.log(res);
console.log("after pop" + numbersList1)

//2.push - добавляет последний элемент
const numbersList2 = [1,2,3,4,5];
console.log("before push" + numbersList2)
//input: number
//return: number   //длинну нового массива
console.log(numbersList2.push(88));

console.log("after push" + numbersList2)


// function push(num) {
//     return length
// }



//.3 shift             - удаляет 1-й элемент

const numbersList3 = [1,2,3,4,5]
console.log("before shift", numbersList3);

//input:none
//return:number

console.log(numbersList3.shift());

console.log("after shift", numbersList3);


//.4 unshift
//input :  number
//return: length