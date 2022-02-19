// const getTotalRevenue = transactions => {
//     return Object.values(transactions)
//         .reduce((acc, elem) => {
//             return acc.concat(elem)
//         }, []).map(item => item.amount)
//         .reduce((a,b)=>a+b)
//
// };


//refactoring

const getTotalRevenue = array => {
    return array.reduce((acc, elem)=>{
        return acc + elem.amount
    },0)
};

// examples
const dayTransactions = [
    { userId: 22, amount: 60, operation: 'sell' },
    { userId: 22, amount: 160, operation: 'buy' },
    { userId: 44, amount: 90, operation: 'sell' },
];

console.log(getTotalRevenue(dayTransactions)); // ==> 310
