const getParsedIntegers = (array)=>array.map(num=>Number.parseInt(num))
const getParsedIntegersV2 = (array)=>array.map(num=>parseInt(num))
const getParsedFloats = (array)=>array.map(num=>Number.parseFloat(num))
const getParsedFloatsV2 = (array)=>array.map(num=>parseInt(num))



const numbers = [2.3, 5.2345, 67.89, 45.56, 4, 99, '12px', '   3.4lsdh', 'aldskf 3.456.4', null, undefined, 'text', Infinity]

console.log(getParsedIntegers(numbers));
console.log(getParsedIntegersV2(numbers));
console.log(getParsedFloats(numbers));
console.log(getParsedFloatsV2(numbers));