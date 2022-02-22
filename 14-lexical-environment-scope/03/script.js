let memory = 0
export function add(number) {
    memory += number;
    return memory;
}

export function decrease(number) {
    memory -= number;
    return memory;
}

export function reset() {
    memory = 0;
    return memory;
}

export function getMemo() {
    return memory
}










// function createMessenger() {
//     let message = 'Just learn it';
//     let sender = 'Gromcode';
//
//     function sendMessage(name) {
//         console.log(`Hello, ${name}! ${message}! This message was sent by ${sender}`)
//     }
//
//     function setMessage(text) {
//         message = text;
//     }
//
//     function setSender(newSender) {
//         sender = newSender;
//     }
//
//     return {
//         sendMessage,
//         setMessage,
//         setSender,
//     }
// }
//
// const messanger1 = createMessenger();
// messanger1.sendMessage('Anna'); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode
//
// const messanger2 = createMessenger();
// messanger2.setMessage('You are learning JS and you do it well');
// messanger2.sendMessage('Michael');