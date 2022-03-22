"use strict"
//algo
//querySelectorAll ("number")=> псевдомассив
//перебираем псевдомассив forEach:
//1) у каждого getAttribute("data-number") и записываем в переменную
//2) каждому setAttribute("data-squared-number", dataNumber * dataNumber)

export function squaredNumbers() {
    let elements = document.querySelectorAll(".number")

    elements.forEach(elem => {
        let dataNumber = elem.getAttribute("data-number");
        elem.setAttribute("data-squared-number", dataNumber * dataNumber)
    })
}

squaredNumbers()


//refactoring
// export function squaredNumbers() {
//     let array = Array.from(document.querySelectorAll(".number"))
//
//     array.forEach(elem => {
//         let dataNumber = elem.dataset.number;
//         elem.dataset.squaredNumber = dataNumber * dataNumber
//     })
// }
