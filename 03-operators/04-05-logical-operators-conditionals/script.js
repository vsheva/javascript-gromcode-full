/* оператор || (OR) */
console.log(`false || true:`, false || true);                  //true
console.log(`false || true || false:`, false || true || false);  //true
console.log(`false || false || false:`, false || false || false);  //false

/* оператор && (AND) */
console.log(`false && true:`, false && true);      //false
console.log(`false && true && false:`, false && true && false); //false
console.log(`true && true && true:`, true && true && true);   //true

/* Логические операторы могут применятся к любым типам данных */

/* || находит первое истинное значение */
console.log(`'text' || false:`, 'text' || false);  //text (!)
console.log(`true || 'text':`, true || 'text');  //true
console.log(`undefined || null || 0 || '' || null:`, undefined || null || 0 || '' || null); //null (!)

const customAmount = null;
const defaultAmount = 17;
const amount = customAmount || defaultAmount;  //17(!)
console.log('amount:', amount);

/* && находит первое ложное значение */
console.log(`'text' && false:`, 'text' && false);  //false (!)
console.log(`true && 'text':`, true && 'text'); //true (!)
console.log(`undefined && null && 0 && '' && null:`, undefined && null && 0 && '' && null); //undefined(!)

/* оператор отрицания (OR) */
console.log(`!true:`, !true);   //false
console.log(`!false:`, !false);   // true
console.log(`!'text':`, !'text');  //false
console.log(`!!'text':`, !!'text');  //true


//#5
// if (true) console.log("I'm in");
//
// if (false) {
//     console.log("I'm not in");
// }
//
// if ('text') {
//     console.log('Yes');
// }
//
// if (null) {
//     console.log('Yes');
// } else {
//     console.log('Else');
// }
//
// const age=20
//
// if (age < 16) {
//     console.log('Too young');
// } else if (age >= 16 && age < 18) {
//     console.log('Almost ready');
// } else if (age >= 18 && age < 65) {
//     console.log('Ready');
// } else {
//     console.log('Else');
// }
//
// // Тернаный оператор ? : ( const result = условие ? значение1 : значение2; )
//
// // create amount variable here
// const amount =10
//
// const result = amount > 17 ? 'full' : 'empty';



