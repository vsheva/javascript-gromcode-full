let checker = arr => {
    if(!Array.isArray) {
        return null
    }

   let max = 0

    for (let i=0; i<arr.length; i++) {
        if (arr[i]>max) {
            max= arr[i]
        }
    }

let min=max
    for (let i=0; i<arr.length; i++) {
        if (arr[i]<min) {
            min= arr[i]
        }
    }
    let sum= max+min
return (sum>1000)


}

console.log(checker([1, 4, 23, 7, 9999]))