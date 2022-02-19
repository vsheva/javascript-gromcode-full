//algo
//1. find Math.abs()
//2. find Max
//3.Square result

export let getMinSquaredNumber =(array)=>{
   if(!Array.isArray(array) || array.length===0) {
       return null;
   }
    let newArr = array.map(item=>Math.abs(item))
    let max = Math.min(...newArr);
    return max*max;


}

// console.log(getMinSquaredNumber([2,-8,5,4]))
