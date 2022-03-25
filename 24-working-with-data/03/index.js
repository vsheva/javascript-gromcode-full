const getDiff = (startDate, endDate) => {
    const start = new Date(startDate).getTime()
    const end = new Date(endDate).getTime()
    const timeRemaining = Math.abs(end - start)/1000;


    let days = Math.floor(timeRemaining / (24*60*60))
    let hours = Math.floor((timeRemaining / 3600) %24)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60);

    return  `${days}d ${hours}h ${minutes}m ${seconds}s`

 }


const firstDate = new Date(2022, 2, 24, 5, 10, 2);
const secondDate = new Date(2022, 2, 25, 6, 15, 5);
console.log(getDiff(secondDate, firstDate))































// const getDiff = (startDate, endDate) => {
//
//     let start = new Date(startDate).getTime();
//     let end = new Date(endDate).getTime();
//     let timeRemaining = Math.abs(end - start)/1000
//
//     let days= Math.trunc(timeRemaining/(60*60*24))
//     let hours = Math.trunc((timeRemaining/(60*60))%24)
//     let minutes = Math.trunc((timeRemaining/60)%60)
//     let seconds = Math.trunc(timeRemaining %60)
//
//     return `${days}d ${hours}h ${minutes}m ${seconds}s`
//
// }
//
// const date1 = new Date(2022, 0, 1, 5, 0, 0)
// const date2 = new Date(2022, 0, 1, 5, 15, 0)
//
// console.log(getDiff(date1, date2))
