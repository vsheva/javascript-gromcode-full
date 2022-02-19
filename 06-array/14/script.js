
// const findDivCount = (a,b,n) => {
//     let count=0
//     for (let i=a; i<=b; i++) {
//         if (i % n ===0) {
//             count = count +1
//         }
//     }
//     return count
// }
//
// console.log(findDivCount(6,9,3))

const numbers = [11,22 ,33,55,77]


let sumNum =(numbers)=> {

// for (let i=0; i<numbers.length; i++)

    let sum = 0
    for (let i=0; i<=numbers.length-1; i++) {
        console.log(numbers[i])
        sum+= numbers[i]
    }

    return sum;
}
const sumOfElements=sumNum(numbers)

console.log("Sum of elements: " + sumOfElements);