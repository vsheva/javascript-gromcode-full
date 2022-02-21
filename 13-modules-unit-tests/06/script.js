export const withdraw = (clients, balances, client, amount) => {

    if(!Array.isArray(clients, balances)) {
        return null
    }
        const balanceClient = balances[clients.indexOf(client)]
    if (balanceClient > amount) {
        return balanceClient - amount
    }
    return -1
}