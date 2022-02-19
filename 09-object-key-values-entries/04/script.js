function addPropertyV1(userData, userId) {
    userData.id = userId
    return userData
}


let addPropertyV2 = (userData, userId)=> Object.assign(userData, {id: userId});
let addPropertyV3 = (userData, userId) =>Object.assign({...userData, id: userId})
let addPropertyV4 = (userData, userId) => ({...userData, id: userId})


const user = {
    name: 'Sam',
};

console.log(addPropertyV1(user, '1234567'))// ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV2(user, '1234567'))// ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV3(user, '1234567'))// ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV4(user, '1234567'))// ==> { name: 'Sam', id: '1234567' }