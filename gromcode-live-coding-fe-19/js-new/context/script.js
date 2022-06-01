


function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
};

let user = makeUser();

alert( user.ref.name );




function makeUser() {
    return {
        name: "Джон",
        ref() {
            return this;
        }
    };
};

let user = makeUser();

alert( user.ref().name );




//contect - это обьект, владеющий вызовом (выполнением) функции

// function run() {
//     console.log(`I've done run in ${this.city}`)
// }
//
// function run(city) {
//     console.log(`I've done run in ${city}`)
// }


// console.log(window)
// console.log(this)
//
// function run() {
//     console.log(this)
//     console.log(`I've done run in ${this.city}`)
// }
//
//
// run()

//=====
//1. what is context ?
//2. when lose context
//3. how to fix context

const timer = {
    secondPassed:0,
    minPassed:0,

    //in: none;
    //out: undefined

    startTimer() {
        console.log(this);
        console.log(this.secondPassed);

        setInterval(() => {
            if (this.secondsPassed === 60) {
                this.secondsPassed = 0;
                this.minsPassed += 1;
            }
            console.log(this);
            console.log(this.secondPassed);
            this.secondsPassed += 1;
        }, 1000);
    },
     stopTimer() {

     },

    getTime() {

    },
    resetTimer() {

    },

}