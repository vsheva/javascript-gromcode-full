function squareArray(arr) {
    let newArr = []
    if (!Array.isArray(arr)) {
        return null
    }


    for (let i=0; i<arr.length; i++) {
        newArr.push(arr[i]* arr[i])
    }

    return newArr
}

console.log (squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]

