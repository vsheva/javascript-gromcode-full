// // input: object, string, any
// // output:obj
function addPropertyV1(obj, key, value) {
   obj[key]=value;
   return obj;
}

function addPropertyV2(obj, key, value) {
    //input: target obj, source obj
    //output: target
    const copy = Object.assign(obj, {[key]:value});
    return copy;
}


function addPropertyV3(obj, key, value) {
    //input: target obj, source obj
    //output: target
    return Object.assign({}, obj, {[key]: value});
}



function addPropertyV4(obj, key, value) {
    //input: target obj, source obj
    //output: target
    return { ...obj, [key]: value};
}
//
//
//
//
// const product = {
//     name: "TV",
// };
// const res = addPropertyV4(product, 'price', '200'); // ==> { value: 170, currency: 'USD' }
// console.log(res)
// const res2 = addPropertyV4(res, 'price', '0')
// console.log(res2)
// console.log(addPropertyV4(res2, 'color', 'white'))
// console.log(product)
//
// let a= {name:"Valera"};
// let b =a;
// b = 5
// console.log(a)


let arr1 = [7, 14]
let arr2= arr1
console.log(arr2)