
let sum=0;

function getSum(first, second) {
    let sum=0;
    for (let i=first; i<=second; i++) {

        if (i%2 ===0) {
           sum = sum +i
        }
    }
  return sum
}

console.log(getSum(5, 10))