export const getAdults = obj => {
    let filteredObj = {}
    for (let key in obj) {
        if (obj[key] >= 18) {
            filteredObj[key] = obj[key] //ключ нового обьекта = равен значению ключа старого
        }
    }
    return filteredObj
}

// examples
//console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }

