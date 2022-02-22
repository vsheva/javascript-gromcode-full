"use strict"

export function makeCounter () {
    let count = 0;
    return function() {
        return count++;
    }
}

let counter1 = makeCounter();
let counter2 = makeCounter();
let counter3 = makeCounter();
console.log(counter1);
console.log(counter1);
console.log(counter1)

console.log(counter2)
console.log(counter2)

console.log(counter3)

let a =5


if (a) {
    a=1
    console.log(a)
}

console.log(a)