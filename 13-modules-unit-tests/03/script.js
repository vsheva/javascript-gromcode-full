const cleanTransactionsList = (array) => {
    return  array
        .filter(item=>isFinite(item))
        .map(item=>"$" + parseFloat(item).toFixed(2))
}



const cleanTransactionsList1 = (array) => {
    return  array
        .filter(item=>!Number.isNaN(item))
        .map(item=>"$ " + parseFloat(item).toFixed(2))
}
const cleanTransactionsList2 = (array) => {
    return  array
        .filter(item=>!isNaN(item))
        .map(item=>"$ " + parseFloat(item).toFixed(2))
}


const array = ['  1.9 ', '16.44556', 17, ' 1 dollar'];
console.log(cleanTransactionsList(array));
console.log(cleanTransactionsList1(array));
console.log(cleanTransactionsList2(array));
