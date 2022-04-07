const successRequest = Promise.resolve({ name: "Tom" });

successRequest
    .then(function onSuccess1(data) {
        // (1)
        throw new Error("Error with data")


    })
    .catch(function onError1(error) {    //<---1
        console.error("onError1", error.message);
    })


const failRequest = Promise.reject(new Error("Something went wrong"));

failRequest
    .catch(function onError2(error) {
        console.error("onError2", error.message);
        // (2)
        throw new Error("Server error")




    })
    .then(function onSuccess2(data) {
        console.log("onSuccess2", data);
    })
    .catch(function onError3(error) {     //<---2
        console.error("onError3", error.message);
    });



//Sample

//1.

// const succRequest = Promise.resolve({name: "Valera"})
//
// successRequest
// .then(data=> {
//     console.log(data)
//     throw new Error("Unexpected Erroorrr!");
// })
// .catch(error=> {
//     console.warn(error.message)
// })

//2.
const failedRequest = Promise.reject(new Error("Faaaaaaail!"))

failedRequest                                //игнорируется
    .then(data=> {
        console.log(data)


    })
    .catch(error=> {                             // <-----
        console.warn(error.message)
        // return Promise.reject("Another error")
        // чтобы пробросить вниз (наружу) и не пошло в then
         throw error;                           //<---
    })
    .then(data=> {
        console.log(data)   //undefined

    })
    .catch(error=> {                             // <-----
        console.warn(error.message)

        throw error;
    })

//ловим ошибку снаружи сверху
window.addEventListener("unhandledrejection", function(e) {
    console.log(e.reason.message)
})