function User(name, age) {
    this.name = name;
    this.age = age;
}

//3
User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`)
}


User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`)
}


User.prototype.setAge = function (newAge) {
   this.age = newAge;

   if(newAge>=25) {
       console.log(`New photo request was sent for ${this.name}`)
       //this.requestNewPhoto
   }

    if(newAge<0) {
        return false
    }

   return newAge;
}


let user1 = new User("Valera", 39)

console.log(user1)
user1.sayHi()
user1.requestNewPhoto()
console.log(user1.setAge(30))
