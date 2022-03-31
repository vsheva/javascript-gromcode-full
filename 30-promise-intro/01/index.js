"use strict"

// algo
// addImage
// promise => return promise
// .then(data)
// .catch(error)

const imgSrc = 'https://ps.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'

export const addImage = imgSrc => {
    const promise = new Promise ((resolve, reject )=>{
        const imgElem = document.createElement("img");
        const containerElem = document.querySelector(".page")
        imgElem.src = imgSrc;
        imgElem.setAttribute("alt", "My Photo");
        containerElem.append(imgElem);


        const onImageLoaded = () => {
            const {width, height} =imgElem;
            resolve({width, height});
        };

        const onErrorImage =() => {
            reject(new Error("Image load is failed.."));
        };

        imgElem.addEventListener("load", onImageLoaded);
        imgElem.addEventListener("error",  onErrorImage);
    });

    return promise;
}




const func = addImage(imgSrc)
console.log(func)


func.then(data => console.log(data))
func.catch(error=>console.log(error))


// addImage(imgSrs).then((data) => console.log(data));
// addImage(imgSrs).catch((error) => console.log(error));

// result.then((data) => {
//     const sizeElem = document.querySelector('.image-size');
//     const { width, height } = data;
//     sizeElem.textContent = `${width} x ${height}`;
// })
//
// result.catch((error) => console.log(error))







//test passed

// const imageSrs =
//     'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
//
// export const addImage = (imgSrc) => {
//     const p = new Promise((resolve, reject) => {
//         const imageElem = document.createElement('img');
//         const pageElem = document.querySelector('.page');
//         imageElem.src = imgSrc;
//         imageElem.setAttribute('alt', 'My photo');
//         pageElem.append(imageElem);
//
//         const onLoadImage = () => {
//             const { width, height } = imageElem;
//             resolve({ width, height });
//         };
//         const onErrorImage = () => {
//             reject(new Error('Image load is failed...'));
//         };
//         imageElem.addEventListener('load', onLoadImage);
//         imageElem.addEventListener('error', onErrorImage);
//     });
//     return p;
// };
//
// addImage(imageSrs)
//     .then((data) => {
//         const sizeElem = document.querySelector('.image-size');
//         const { width, height } = data;
//         sizeElem.textContent = `${width} x ${height}`;
//     })
//     .catch((error) => console.log(error));







