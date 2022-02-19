//algo
//1.get absolute
//2.find max



const getMaxAbsoluteNumber = (arr) => {

    if (!Array.isArray(arr)|| arr.length===0) {
        return null
    }

    let absolute = arr.map(item=>Math.abs(item))
    let max= Math.max(...absolute)
    return max

    // return Math.max(...arr.map(item=>Math.abs(item)))
}

// examples

console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
// getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
// getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777