// const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
//
// //input:callback,init acc(optional)
// //output:acc(number)
//
// //callback
// //acc,el,index,array(optional)
// //acc
// transactions.reduce((acc, elem) => {
//     console.log('acc = ' + acc);
//     console.log(elem);
//     return acc + elem;
//     //return acc;
// }, 0);

let arr = [1, 2, 5];

// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
let newArr = arr.splice(1, 1, 3, 4);
console.log(newArr)
//alert( arr ); // 1,2,3,4,5