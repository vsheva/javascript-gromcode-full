export function getItemsList() {
    const elementsList = document.querySelectorAll('.technology')
    console.dir(elementsList)
    return elementsList
}

 export function getItemsArray() {
    const nodeList = Array.from(document.querySelectorAll('.tool'))
    console.dir(nodeList)
    return nodeList
}

getItemsList()
getItemsArray()