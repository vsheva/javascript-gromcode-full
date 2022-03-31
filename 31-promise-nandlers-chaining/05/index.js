"use strict"

// const delay = (time)=>{
//     const promise = new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve(time)
//         }, time)
//     })
//     return promise
// }
//
// delay(3000)
//     .then(()=>console.log("Done"))


//refactoring


// algo
// const delay(ms) => Promise
// use setTimeout(callback, delay)


const delay = (time)=>
    new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Done")
        }, time)
    })

delay(3000)
    .then((data)=>console.log(data))

