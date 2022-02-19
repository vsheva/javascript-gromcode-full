const getFiniteNumbers = (array) => array.filter(num => Number.isFinite(num))
const getFiniteNumbers2 = (array) => array.map(num => Number.isFinite(num))
const  getParsedIntegers = (array) => array.filter(num=>Number.parseInt((num)))
const  getParsedIntegers2 = (array) => array.map(num=>Number.parseInt((num)))



const numbers = [2, 3, 4, 5, 4.64, 2.36, null, NaN, undefined, 'text']
console.log(getFiniteNumbers(numbers));
console.log(getFiniteNumbers2(numbers));
console.log(getParsedIntegers(numbers));
console.log(getParsedIntegers2(numbers));

























//
// let getFiniteNumbers= (array)=> array.filter(item=> Number.isFinite(item))
// let getFiniteNumbersV2= (array)=> array.filter(item=> isFinite(item))
// let getNaN= (array)=> array.filter(item=> Number.isNaN(item))
// let getNaNV2= (array)=> array.filter(item=> isNaN(item))
// let getIntegers= (array)=> array.filter(item=>parseInt(item))
//
//
// const numbers = [2, 3, 4, 5, 4.64, 2.36, null, NaN, undefined, 'text']
//
// console.log(getFiniteNumbers(numbers));
//  console.log(getFiniteNumbersV2(numbers));
// console.log(getNaN(numbers));
//  console.log(getNaNV2(numbers));
//  console.log(getIntegers(numbers));
