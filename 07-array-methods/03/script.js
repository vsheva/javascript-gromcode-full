const flatArray = arr => {
    // put your code here
    return arr.slice().reduce((acc,elem)=> acc.concat(elem), []).sort((a,b)=>a-b)

};


const arrWithArr = [1, 2, [3, 45, 5], 4, [6, 34, 99], 41]

let result =flatArray(arrWithArr)

console.log(result)