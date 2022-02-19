const increaseEvenEl = (arr, delta) => {


    const increasedArr = []

    for(let i = 0; i < arr.length; i +=1) {
        if(arr[i] % 2 === 0) {
            increasedArr.push(arr[i] + delta);
        }
        else {
            increasedArr.push(arr[i])
        }
    }
    return increasedArr
};

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20))