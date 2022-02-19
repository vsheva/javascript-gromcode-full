
const getSpecialNumbers=(arr)=> {

    const result =arr.filter(item=> {
        if(item%3===0) {
            return true
        }
        return false;
    })
    return result
}