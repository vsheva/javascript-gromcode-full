
const num = [1, 2, 3, 4, 1, 2, 3, 4, 5, 5, 6, 2, 1]; // 6
function uniqueCount(arr) {
    const res = [];

    for (const item of arr) {
        if (!res.includes(item)) {
            res.push(item);
        }
    }

    return res.length;
}

console.log(uniqueCount(num));