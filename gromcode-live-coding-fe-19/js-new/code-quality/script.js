'use strict';
//bad
// function withdraw(clients, balances, client, amount) {
//     for (let i = 0; i < clients.length; i++) {
//         if (clients[i] === client && balances[i] >= amount) {
//             return (balances[i] -= amount);
//         }
//         if (clients[i] === client && balances[i] < amount) {
//             return -1;
//         }
//     }
// }

// const withdraw = (clients, balances, client, amount) => {
//     const indexClient = clients.indexOf(client);

//       if(amount > balances[indexClient]) {
//         return -1;
//       }

//       return balances[indexClient] - amount;
//     }

// function withdraw(clients, balances, client, amount) {
//     for (let i = 0; i < clients.length; i++) {
//       if (clients[i] === client && balances[i] >= amount) {
//         return (balances[i] -= amount);
//       } else if (clients[i] === client && balances[i] < amount) {
//         return -1;
//       }
//     }
//   }

// const withdraw = (clients, balances, client, amount) => {
//   let indexClient = clients.indexOf(client);
//   return balances[indexClient] <= amount ? -1 : balances[indexClient] - amount;
// };

//bad
// function withdraw(clients, balances, client, amount) {
//     let index = clients.indexOf(client);
  
//     if (balances[index] >= amount) {
//       return (balances[index] -= amount);
//     }
  
//     return -1;
//   }


//   function withdraw(clients, balances, client, amount) {
//     let index = clients.indexOf(client);
  
//     if (balances[index] >= amount) {
//       return (balances[index] -= amount);
//     }
  
//     return -1;
//   }

//
// const withdraw = (clients, balances, client, amount) => {
//     let result = 0;
//     clients.forEach(function (name, index) {
//         if (name.includes(client) && balances[index] >= amount) {
//             result = balances[index] - amount;
//         } else if (name.includes(client) && balances[index] < amount) {
//             result = -1;
//         }
//     });
//     return result;
// };



'use strict';

const withdraw = (clients, balances, client, amount) => {

    const balanceClient = balances[clients.indexOf(client)]

    if (balanceClient < amount) {
        return -1
    }
    return balanceClient - amount
}

//example 1:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)

//output
//37
//и массив balances должен быть [1400, 37, -6]



//example 2:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)

//output
//-1
//и массив balances должен быть [1400, 87, -6]