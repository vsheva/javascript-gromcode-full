
const arrAverage = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((acc, el) => acc + el, 0) / arr.length
};


// const arrAverage = (arr) => {
//   return  !Array.isArray(arr) ? null : arr.reduce((acc, el) => acc + el, 0) / arr.length
// }

// tests
console.log(arrAverage([2, 5, 6, 3]))