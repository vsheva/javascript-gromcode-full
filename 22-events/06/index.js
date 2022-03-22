//(string)=> undefined

export function setButton (text) {
    document.querySelector("body").innerHTML = `<button>${text}</button>`
    //document.querySelector("body").textContent = `<button>${text}</button>`
}

setButton("Valera")

