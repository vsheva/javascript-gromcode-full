// How to work on tech tasks. Step by step guide

// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution


//algo
//1. iterate numbers from 2 to num
//2. check if prime
 //2.1 number - iterate all numbers from 2 to number
 //2.2 если index/secondIndex ===0 not prime  (внутри делить number на все числа до него и если какое-то делится без остатка- not prime)
 //3. if prime - console
//4.


//если не знаю алго
//9
// 2 =>2/2 2/1   - true
//3=>  3/3  3/2 3/1  - true
//4 =>  4/2  4/3 4/4  - false


//input:number
//output:undefined
function getPrimes(num) {
  for (let index= 2; index<=num; index++){
      //console.log("INDEX IS " + index);
      let isPrime=true
      for (let secondIndex =2; secondIndex<index; secondIndex++) {
         // console.log("SECOND INDEX IS " + secondIndex);
          if(index % secondIndex === 0) {
              isPrime=false;
              break;
          }
      }
      if(isPrime){
          console.log(index);
      }
  }
}

//test data
getPrimes(10)