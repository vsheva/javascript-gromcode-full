const fetchUser = async(userId) => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`)
        if (response.ok) {
            return response.json()
        }
        throw new Error("Failed to get user data")

    }
    catch (err) {
        alert (err.message)

    }
}


export const getUsersBlogs =(userId) => {
    return Promise.all(userId.map((el)=>fetchUser(el))
                                                  .then(response => response.blog))
}



getUsersBlogs(['google', 'facebook', 'gaearon']).then(linksList => console.log(linksList))






//
// const fetchUser = async userId => {
//     try {
//      const response=  await fetch(`https://api.github.com/users/${userId}`)
//
//         if(response.ok) {
//             return response.json();
//         }
//             throw new Error("Failed to load user data")
//
//
//
//     }
//     catch (err) {
//      alert(err.message)
//     }
//  }
//
//  const getUsersBlogs = (data) => {
//     Promise.all(data.map((el)=> fetchUser(el)
//                                          .then(res=>res.blog)))
//  }
//
// getUsersBlogs(['google', 'facebook']).then(linksList => console.log(linksList));



























// export const fetchUser = async (userId) => {
//     try {
//         const response = await fetch(`https://api.github.com/users/${userId}`)
//         if (!response.ok) {
//             return null;
//         }
//         const userData = await response.json();
//         return userData; //object
//     } catch (err) {
//         throw new Error("Failed to get user data")
//     }
// };

// fetchUser("facebook")
//     .then(userData => console.log(userData))
//     .catch(err => alert(err.message))
//
//





























//  const fetchUser = async (userId) => {
//     try {
//         const response = await fetch(`https://api.github.com/users/${userId}`)
//         if (!response.ok) {
//             return response.json();
//         }
//         const userData = await response.json();
//         return userData; //object
//     } catch (err) {
//         throw new Error("Failed to get user data")
//     }
// };
//
//  const getUsersBlogs = arrId =>
//      Promise.all(arrId.map(async el => fetchUser(el).then(res => res.blog)));
//
//  getUsersBlogs(['google', 'facebook', 'gaearon']).then(linksList => console.log(linksList))