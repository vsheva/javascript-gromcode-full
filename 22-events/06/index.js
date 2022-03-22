//algo
//querySelector
// clickFunc: 1)log('clicked)  2)btn.removeEventListener
// btn addEventListener

const btn = document.querySelector(".single-use-btn")

let clickFunc = () => {
    console.log('clicked')
    btn.removeEventListener("click", clickFunc)
}


btn.addEventListener("click", clickFunc)


