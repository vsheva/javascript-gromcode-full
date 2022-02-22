"use strict"

//export
let createCalculator = ()=> {
    let memory=0

    function add (number) {
        return memory+=number
    }

    function decrease (number) {
        return memory-=number
    }

    function reset (number) {
        return memory=0
    }

    function getMemo(number) {
        return memory
    }

    return {
        add,
        decrease,
        reset,
        getMemo
    }
}

let calculator1 = createCalculator()
let calculator2 = createCalculator()

console.log(calculator1.add(2))
console.log(calculator2.decrease(1))
console.log(calculator1.reset())
console.log(calculator2.getMemo())