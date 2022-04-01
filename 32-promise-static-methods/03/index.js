//  const makePromise = (value) => {
//     const promise = new Promise(resolve => resolve(value))
//     return promise
// };


 const makePromise = (value) => new Promise(resolve => resolve(value))

/*
 * пример использования
 */

makePromise(17)
    .then(data => console.log(data))










// makePromise(17).then(number => {
//     console.log(number); // 17
// });
