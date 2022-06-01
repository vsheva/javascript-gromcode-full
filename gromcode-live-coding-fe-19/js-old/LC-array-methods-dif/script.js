const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

//input: func;
//output:arr


//input: element; index(optional), arr(optional)
//output:boolean
// function filterCallback (num) {
//     return num>5
// }


// function filterCallback (num) {
//     console.log( num)
//     return num>5
// }


//option2
// const filterRes = anotherNumbersList.filter(function (num) {
//     return num>5
// })
// console.log(filterRes)


//3
const filterRes = anotherNumbersList.filter(num =>num > 5)
console.log(filterRes)





//--------------------map-----------------------------

const numbersList = [5, 0, 8, 10, -4, 50, 220];

//input: callback
//output: array


//input:el
//output: modified el

const mapRes = numbersList.map(el=>{
    if(el<0) {
        return "number is negative"
    }
    return el*el;
})
console.log(mapRes)

// ----------------find -------------

//find
//input:func
//output:el


//input:element
//output:boolean

//1
// const findRes= numbersList.find(el=> {
//     if(el %2 ===1) {
//         return true
//     } else {
//         return false
//     }
// });


//2
const findRes= numbersList.find(el=> el %2 ===1);

console.log(findRes)


//---------------------------some-----------------------
// наличие транзакции больше 1000

//input: func
//output: boolean


// -------------------------forEach -------------------------//аналон цикла for

//input: func
//output:undefined


//callback
//input: el, index, arr
//output: undefined

numbersList.forEach(el=>{
    if(el<0) {
        console.log(el)
    }
})