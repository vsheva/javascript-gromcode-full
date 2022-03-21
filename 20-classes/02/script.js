// algo

// create two classes Vehicle and Ship
// Vehicle should have
// two props name and wheels
// two methods move and stop => log(this.name + text)
//
// Ship extends Vehicle
// constructor(name, numberOfWheels, maxSpeed)
// method move() expands parental move() => log(this.name + text); super.move()
// method stop() expands parental move() => super.stop(); log(this.name + text)



class Vehicle {
    constructor(name, numberOfWheels) {
        this.name = name;
        this.numberOfWheels = numberOfWheels;
    }

    move() {
        console.log(`${this.name} is moving`);
    }

    stop() {
        console.log(`${this.name} stopped`);
    }
}

class Ship extends Vehicle {
    constructor(maxSpeed) {
        super("Argo", false);
        this.maxSpeed = maxSpeed;


    }

    move() {
        console.log(`${this.name} lifting anchor up`);
        super.move();
    }

    stop() {
        super.stop();
        console.log(`${this.name} lifting anchor down`);
    }
}

const ship1 = new Ship(20);
ship1.move()
