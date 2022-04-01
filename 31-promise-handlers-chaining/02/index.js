//algo
//  asyncCalculator(num)
//  new Promise(resolve, reject)
// .then
//.then
//.then

 const asyncCalculator = (numbr) =>
    new Promise((resolve) => {
    setTimeout(() => {
        console.log(`Initial value: ${numbr}`);

        resolve(numbr);
    }, 500);
})
    .then(
        (data) =>
        new Promise((resolve) => {
            setTimeout(() => {
                let squared = data * data;
                console.log(`Squared value: ${squared}`);
                resolve(squared);
            }, 500);
        }))
     .then((datas) =>{
         let doubled = datas * 2;
         console.log(`Doubled value: ${doubled}`)
         return doubled;
     });

const result = asyncCalculator(5)



