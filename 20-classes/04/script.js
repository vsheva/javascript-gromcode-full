'use strict';

// algo

// create class Order
// add constructor(price, city, type)
// isConfirmed = false
// checkPrice() =>    this.price > 1000
//  confirmOrder() => if(!isConfirmed) isConfirmed = true, dateConfirmed = new Date()
//  isValidType() => return this.type === 'Buy' || 'Sell'


 export class Order {
    constructor(price, city, type) {
        this.city = city;
        this.dateCreated=new Date();
        this.id = "123";
        this.price = price;
        this.type = type;
        this.isConfirmed = false;
        this.dateConfirmed = new Date();

    }
    checkPrice() {
        return  this.price > 1000
    }
    confirmOrder() {
     if(this.isConfirmed===false) {
         this.isConfirmed = true;
         this.dateConfirmed = new Date();
     }
    }
    isValidType() {
        return (this.type === 'Buy' || this.type === 'Sell')
    }
}

const myOrder = new Order("NY", 2000, "Sell")

console.log(myOrder)
console.log(myOrder.checkPrice())
myOrder.confirmOrder()
console.log(myOrder.isValidType())
