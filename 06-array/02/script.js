
const numbers = [11,22 ,33,55,77]


let sumNum =(numbers)=> {

    if (!Array.isArray(numbers)) {    // проверка на немассив
        return null
    }

// for (let i=0; i<numbers.length; i++)

    let sum = 0
    for (let i=0; i<=numbers.length-1; i++) {
        console.log(numbers[i])
        sum+= numbers[i]
    }

    return sum;
}
const sumOfElements=sumNum(numbers)

console.log("Sum of elements: " + sumOfElements);
