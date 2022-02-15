function sum(from, to) {
    let sum=0
    for (let i= from; i<to; i++) {
        sum+=i
    }
    return sum
}


function compareSums(a,b,c,d) {
    if (sum (a,b)> sum (c,d)) {
        return true
    } else {
        return false
    }
}

console.log(compareSums(3,8, 4, 6))