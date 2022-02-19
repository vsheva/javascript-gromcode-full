export const getSquaredArray = (array) => array.map(item => item * item);
export const getOddNumbers = (array) => array.filter(item => item % 2 === 1);
export default (a, b) => a + b;

//
// export const getSquaredArray = arr => arr.map(el => el * el)
//
// export const getOddNumbers = arr => arr.filter(el => el%2 !== 0)
//
// export default (num1, num2) => num1 + num2