function getKeys(obj) {
    let newArray = Object.keys(obj);
   let arrayKey= newArray.forEach(item=>console.log(item))




    // for (let i=0; i<newArray.length; i++) {
    //     console.log(newArray[i])
    // }
}

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });