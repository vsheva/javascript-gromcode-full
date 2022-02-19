const countOccurrences = (text, subst) => {

    if (subst.length === 0) {
        return null
    }

    if (text === "") {
        return null
    }


    if (text.includes(subst)) {
        let count = text.split(subst).length - 1
        return count
    }

}

console.log(countOccurrences('123monwo1emnoefmsn', 'm'))
