export const getDiff = (startDate, endDate) => {
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
//     const date1 = new Date(startDate).getTime()
//     console.log(date1)
//     const date2 = new Date(endDate).getTime()
//
//     return new Date(date2 - date1)
// }
// getDiff(10, 5)
//
//
// console.log(new Date(1990, 0, 1).getTime())