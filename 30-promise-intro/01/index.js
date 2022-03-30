"use strict"

// algo
// addImage
// promise => return promise
// .then(data)
// .catch


const addImage = imgSrc => {
    const promise = new Promise ((resolve, reject )=>{
        const imgElem = document.createElement("img");
        imgElem.setAttribute("alt", "My Photo");
        imgElem.src = imgSrc;
        const containerElem = document.querySelector(".page")
        containerElem.append(imgElem);


        const onImageLoaded = () => {
            const {width, height} =imgElem;
            resolve({width, height});
        };

        imgElem.addEventListener("load", onImageLoaded);
        imgElem.addEventListener("error", () => reject(new Error("Image load is failed")));
    });
    return promise;
}


const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'

const result = addImage(imgSrc)
console.log(result)

result.then(data => console.log(data))
result.catch(error=>console.log(error))

// result.then((data) => {
//     const sizeElem = document.querySelector('.image-size');
//     const { width, height } = data;
//     sizeElem.textContent = `${width} x ${height}`;
// })
//
// result.catch((error) => console.log(error))








