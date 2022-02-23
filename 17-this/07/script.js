const checkSum = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }

    let sum = 0
    for (let item of arr) {
        sum += item
    }


    if (sum > 100) {
        return true
    } else {
        return false
    }
};

// examples
console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true

