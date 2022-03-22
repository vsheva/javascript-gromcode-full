"use strict"
//algo
//span= document.querySelector
// parent of span =  returns the parent of the specified node in the DOM tree
//getAttribute("data-section")


 function getSection(num) {
   let span= document.querySelector(`span[data-number="${num}"]`)
    let parent = span.parentNode
    return parent.getAttribute("data-section")
}

