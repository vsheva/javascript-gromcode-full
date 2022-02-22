let createCalculator = ()=> {
    let memory=0

    function add (number) {
        return memory+=number
    }

    function decrease (number) {
        return memory-=number
    }

    function reset (number) {
        return memory=0
    }

    function getMemo(number) {
        return memory
    }

    return {
        add,
        decrease,
        reset,
        getMemo
    }
}



let createLogger = () =>{


    return {
        warn,
        error,
        log,

    }
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