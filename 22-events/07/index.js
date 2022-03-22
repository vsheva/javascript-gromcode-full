//algo
//quary all
//handleClick => textContent
// перебор: add eventListener to each elem

const btns = document.querySelectorAll(".btn")

const handleClick = (e) => {
    console.log(e.target.textContent)
}

btns.forEach(element => {
    element.addEventListener("click", handleClick)
})


