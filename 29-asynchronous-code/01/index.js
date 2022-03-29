//algo
//функция addImage
//создать imgElem и добавить его в выбранный  pageElement; установить attribute alt
//обработчик на событие load и  error
//если load => callback(null, imgElem)
//если error =>callback("Image load failed"), return

 const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("alt", "My Photo");
    imgElem.src = imgSrc;
    const containerElem = document.querySelector(".page")
    containerElem.append(imgElem);


    const onImageLoaded = () => {
        //const {width, height} =imgElem;
        callback(null, imgElem);
    };

    imgElem.addEventListener("load", onImageLoaded);
    imgElem.addEventListener("error", () => callback("Image load is failed"));
};


// callback function
const onImageLoaded = (error, imgElem) => {
    if (error) {
        console.log(error);
        return;
    }

    const {width, height} = imgElem;

    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
};


// example
// addImage(const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
//     , onImageLoaded);









