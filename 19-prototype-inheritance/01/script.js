'use strict'



//1.
// const vehicle = {
//     move(){
//         console.log(`${this.name} is moving`)
//     },
//     stop(){
//         console.log(`${this.name} stopped`)
//     },
//
// };
//
//
// const ship = {
//     name: 'Argo',
//     startMachine() {
//         console.log(`${this.name} lifting anchor up`);
//         this.move();
//     },
//     stopMachine() {
//         this.stop();
//         console.log(`${this.name} lifting anchor down`);
//     },
//     __proto__: vehicle,
// };
//
//

// export {vehicle,ship};


//2.
const vehicle = {
    move(){
        console.log(`${this.name} is moving`)
    },
    stop(){
        console.log(`${this.name} stopped`)
    },

};


const ship = {
    name: 'Argo',
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        this.move();
    },
    stopMachine() {
        this.stop();
        console.log(`${this.name} lifting anchor down`);
    },
};


Object.setPrototypeOf(ship, vehicle)
export {vehicle, ship}
