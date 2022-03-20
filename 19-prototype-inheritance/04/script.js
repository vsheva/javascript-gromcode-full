'use strict';

const user = {
    firstName:'John',
    lastName:'Doe',
    get fullName() {
        return (`${this.firstName} ${this.lastName}`)
    },


    set fullName(value) {
        //ВНИМАНИЕ!
        const [firstName, lastName] = value.split(' ');
        this.firstName=firstName;
        this.lastName=lastName;
        //ВНИМАНИЕ!

    }
}

console.log(user.fullName)
user.fullName="Valeriy Shevhenko"
console.log(user.lastName)
console.log(user.fullName)