'use strict'

//asyncSum(asyncNum1,asyncNum2, asyncNum3)

// algo
//1.etValueWithDelay(value, delay) => Promise -> resolve
//2. asyncSum = (...asyncNumbers)=> PromiseAll().then(()=>getSum)
//2-a.getSum(numbers) => numbers.filter().reduce()

//3. asyncSum(numbers) => asyncSum().resolve.reject .then


//1.
const getValueWithDelay = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        console.log(value)
        resolve(value);
    }, delay);
});

const asyncNum1 = getValueWithDelay("10", 1000)
const asyncNum2 = getValueWithDelay(54, 2000)
const asyncNum3 = getValueWithDelay("undef", 2000)


const getSum = (numbers) => {
    return numbers
        .filter(val => !isNaN(val))
        .reduce((acc, num) => acc + +num, 0)
}

//2.
export const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers)
        .then(numbers => getSum(numbers))
        .catch(() =>new Error("Can't calculate\\")); // !
}

//3.
asyncSum(asyncNum1, Promise.reject(new Error("error")), asyncNum3)
    .then(result => console.log(result))




