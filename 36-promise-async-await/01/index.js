// async function func() {
//     const promise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(17)
//         }, 1500)
//     })
//   const result = await promise;
//     console.log(result);
//     console.log("Hello");
// }
//
// const result = func()
// console.log("Hi")

 const fetchUser = async (userId) => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`)
        if (!response.ok) {
            return null;
        }
        const userData = await response.json();
        return userData; //object
    } catch (err) {
        throw new Error("Failed to get user data")
    }
};




fetchUser("facebook")
    .then(userData => console.log(userData))
    .catch(err => alert(err.message))



