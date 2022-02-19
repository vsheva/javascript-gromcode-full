function  filterNames(arr, text) {

    return arr.slice().filter(item=> item.length>5 && item.includes(text))
}