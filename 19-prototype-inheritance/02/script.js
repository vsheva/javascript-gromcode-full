

function getOwnProps(obj) {
    let arr = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop] !== 'function') {
            arr.push(prop);
            return arr
        }
    }

}


// function getOwnProps(obj) {
//     return Object.keys(obj).filter(element => typeof obj[element] !== 'function')
// }

let ship = {
    name: 'Argo',
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
    },
};


console.log(getOwnProps(ship))


