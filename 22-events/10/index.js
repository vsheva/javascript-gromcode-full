// algo
//query
// addListener => e.target.attributes["data-page-number"].textContent

// const paginations = document.querySelectorAll(".pagination__page")
// const handleClick = (e) => console.log(e.target.attributes["data-page-number"].textContent)
// paginations.forEach(element => {
//     element.addEventListener("click", handleClick)
// })


//refactoring
// paginations.addListener =>  event.target.dataset.pageNumber

const paginations = Array.from(document.querySelectorAll(".pagination__page"))
const handleClick = (e) => console.log(e.target.dataset.pageNumber)

paginations.forEach(element => element.addEventListener("click", handleClick))
//paginations.map(element => element.addEventListener("click", handleClick))
