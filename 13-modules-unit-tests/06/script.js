const withdraw = (clients, balances, client, amount) => {

        const balanceClient = balances[clients.indexOf(client)]
    if (balanceClient > amount) {
        return balanceClient - amount
    }
    return -1
}