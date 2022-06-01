"use strict"

function sum (from, to, resolver) {
    //
    let sum=0;
    for (let index=from; index<=to; index++ ){
        sum+=index;
    }
   resolver(sum)       //вызываем коллбек
}



//input:num
//return:undefined   (в нашем примере )



//1.
function printResult(res) {
    console.log("Result is " + res)
}
sum(10,16, printResult)

//2.
function alertResult(res) {
    alert("result is " + res)
}
sum(10, 16, alertResult)