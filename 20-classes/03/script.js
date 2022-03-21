// algo

// create class Wallet
// balance = 0
// method getBalance => return this.balance
// method deposit(amount) => this.balance += amount
// add method withdraw(amount) => if (balance < amount ) log(message) else balance += amount
// export class

class Wallet {
    constructor() {
        this._balance = 0;
    }

    getBalance() {
        return this._balance;
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log("No enough funds")
            return;
        } else {
            this._balance -= amount;
        }
    }
}

const wallet1 = new Wallet();
//wallet1._balance

console.log(wallet1.getBalance());
wallet1.deposit(50);
console.log(wallet1.getBalance());
wallet1.withdraw(15);
console.log(wallet1.getBalance());
wallet1.withdraw(100)
console.log(wallet1.getBalance());