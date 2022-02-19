
function removeDuplicates(array) {

    if(!Array.isArray) {
        return null
    }

    return [...new Set(array)];

}