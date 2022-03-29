"use strict"

// algo
// функция shmoment(data), которая принимает data и возвращает обькт калькулятор
// object calculator  с методами add, subtract, result

//подробно
const shmoment = data => {
    const momentumData =new Date(data)

    const calculator = {

        add(text, number) {
            if (text=== "years") { momentumData.setFullYear(momentumData.getFullYear() + number);}
            else if (text=== "months") {momentumData.setMonth(momentumData.getMonth() + number); }
            else if (text=== "days") { momentumData.setDate(momentumData.getDate() + number);}
            else if (text=== "hours"){momentumData.setHours(momentumData.getHours() + number); }
            else if (text=== "minutes") { momentumData.setMinutes(momentumData.getMinutes() + number);}
            else if (text=== "seconds") { momentumData.setSeconds(momentumData.getSeconds() + number)}
            else if (text=== "milliseconds") { momentumData.setMilliseconds(momentumData.getMilliseconds() + number)}
            return calculator; //this
        },

        subtract(text, number) {
            if (text=== "years") momentumData.setFullYear(momentumData.getFullYear() - number);
            else if (text=== "months") {momentumData.setMonth(momentumData.getMonth() - number);}
            else if (text=== "days") {momentumData.setDate(momentumData.getDate() - number);}
            else if (text=== "hours"){momentumData.setHours(momentumData.getHours() - number);}
            else if (text=== "minutes"){momentumData.setMinutes(momentumData.getMinutes() - number);}
            else if (text=== "seconds"){momentumData.setSeconds(momentumData.getSeconds() - number);}
            else if (text=== "milliseconds"){momentumData.setMilliseconds(momentumData.getMilliseconds() - number);}
            return calculator; //this
        },

        result() {
            return momentumData;
        }

    }
    return calculator
}





const momentumTestData = new Date(2022, 2, 29, 12, 0, 0);
console.log(momentumTestData);

console.log(shmoment(momentumTestData).add("days", 1).subtract("years", 2).result());






//refactoring
// export const shmoment = data => {
//     const momentumData =new Date(data)
//
//     return {
//         add(text, number) {
//             if (text=== "years")  momentumData.setFullYear(momentumData.getFullYear() + number);
//             if (text=== "months")  momentumData.setMonth(momentumData.getMonth() + number);
//             if (text=== "days") momentumData.setDate(momentumData.getDate() + number);;
//             if (text=== "hours") momentumData.setHours(momentumData.getHours() + number);
//             if (text=== "minutes")  momentumData.setMinutes(momentumData.getMinutes() + number);
//             if (text=== "seconds") momentumData.setSeconds(momentumData.getSeconds() + number)
//             if (text=== "milliseconds")  momentumData.setMilliseconds(momentumData.getMilliseconds() + number)
//             return this; //this
//         },
//
//         subtract(text, number) {
//             if (text=== "years") momentumData.setFullYear(momentumData.getFullYear() - number);
//             if (text=== "months") momentumData.setMonth(momentumData.getMonth() - number);
//             if (text=== "days")  momentumData.setDate(momentumData.getDate() - number);
//             if (text=== "hours")  momentumData.setHours(momentumData.getHours() - number);
//             if (text=== "minutes") momentumData.setMinutes(momentumData.getMinutes() - number);
//             if (text=== "seconds") momentumData.setSeconds(momentumData.getSeconds() - number);
//             if (text=== "milliseconds")  momentumData.setMilliseconds(momentumData.getMilliseconds() - number);
//             return this; //this
//         },
//
//         result() {
//             return momentumData;
//         }
//     }
// }





// const momentumTestData = new Date(2022, 2, 29, 12, 0, 0);
// console.log(momentumTestData);
//
// console.log(shmoment(momentumTestData).add("days", 1).subtract("years", 2).result());