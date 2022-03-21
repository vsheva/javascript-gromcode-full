// algo
// li elements: 1,4,6,8
// .list 1,8 - prepend, append
// .special 4,6 => before (5), after(5)

//(none)=>undefined

export function finishList() {

    let list = document.querySelector(".list")
    let special = document.querySelector(".special")

    let element1 = document.createElement("li")
    element1.textContent = "1"
    list.prepend(element1)

    let element8 = document.createElement("li")
    element8.textContent = "8"
    list.append(element8)

    let element4 = document.createElement("li")
    element4.textContent = "4"
    special.before(element4)

    let element6 = document.createElement("li")
    element6.textContent = "6"
    special.after(element6)

}

finishList()

