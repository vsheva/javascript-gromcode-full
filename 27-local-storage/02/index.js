// algo
// counter
//1. data-type="increase" to left, "decrease" to right btn
//2. add event listener on btns onCounterChange(e)
//3. get dataset.type of button
//4. realised counter value ++ or -- textContent
//5. add counter value to local storage
//6. add storage event window.addEventListener('storage' onStorageChange)




const counterElem = document.querySelector(".counter")
const counterValueElem = document.querySelector(".counter__value")

const onCounterChange = (e) => {                                     //2
    const isButton = e.target.classList.contains("counter__button")

    if (!isButton) {
        return
    }

    const action = e.target.dataset.action                          //3
    const oldValue = Number(counterValueElem.textContent)

    const newValue = action === "decrease"                          //1
        ? oldValue - 1 : oldValue + 1;

    counterValueElem.textContent = newValue;                        //4
    localStorage.setItem("counterValue", newValue)

}

counterElem.addEventListener("click", onCounterChange);


//add counter value to local storage (на нес. вкладок)              //5
const onStorageChange = (e) => {
    //e has свойство newValue
    counterValueElem.textContent = e.newValue;
}
window.addEventListener("storage", onStorageChange)


// add storage event window.addEventListener('storage' onStorageChange) значения из localeStorage на DOM    //6
const onDocumentLoaded = () => {
    counterValueElem.textContent = localStorage.getItem("counterValue") || 0;
}
document.addEventListener("DOMContentLoaded", onDocumentLoaded)