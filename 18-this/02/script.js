export const wallet = {
    transactions: [1, 7, 345, 4],
    getMax() {
        return Math.max(...this.transactions)
    },
    getMin() {
        return Math.min(...this.transactions)
    }
};

console.log(wallet.getMax());
console.log(wallet.getMin())