let memory=0

export default function add (number) {
   return memory+=number
}

export default function decrease (number) {
    return memory-=number
}

export default function reset (number) {
    return memory=0
}

export default function getMemo(number) {
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