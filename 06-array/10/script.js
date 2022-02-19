function cloneArr(arr) {
    if(!Array.isArray(arr)) {
        return null
    }

    let newArr= arr.slice()
    return newArr
}