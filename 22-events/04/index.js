// algo
// listener to checkbox
// log(checkbox.checked)

const checkbox = document.querySelector(".task-status")
const checkboxStatus = () => console.log(checkbox.checked)
checkbox.addEventListener("change", checkboxStatus)

