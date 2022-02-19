//algo
//get items
//1.sum up
//2.round add number



const getTotalPrice = (array) => {
    let sum = array.reduce((a, b) => a + b,0)
    let round= Math.floor(sum*100)/100
    return (`$${round}`)
}

let array=[1.96788,5.95489,8.8376]
let total = getTotalPrice(array)
console.log(total)