'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`)
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`)
    }

    setAge(newAge) {
        if (newAge < 0) {
            return false
        }

        this.age = newAge;

        if (newAge >= 25) {
            this.requestNewPhoto()
        }
        return newAge;
    }

    static createEmpty() {
        return new User("", null)
    }

}


let user1 = new User("Valera", 39)

console.log(user1)
user1.sayHi()
user1.requestNewPhoto()
console.log(user1.setAge(30))

let user2 = User.createEmpty()
console.log(user2)