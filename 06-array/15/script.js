
const includes = (arr, num) => {
    // put your code here

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }

    }
    return false
}
// examples
console.log(includes([1, 4, 8, 3], 3)); // ==> true
includes([1, 4, 8, 3], 5); // ==> false
