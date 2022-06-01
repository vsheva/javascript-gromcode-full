// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }



//createMessenger

// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message':...
//     'sender':...
//     'sendMessage'..
//        'setSender':..
//        'setMessage': ...
//   },
//   'outherLexicalEnv':global
// }


//run

// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//                       }
//   'outherLexicalEnv':global
// }



const message = 'Test';
const weight = 55;

function run() {
    console.log('RUN');
}


function createMessenger() {
    let message = 'Just learn it';
    let sender = 'Gromcode';

    console.log(weight);

    function sendMessage(name) {
        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setSender(newSender) {
        sender = newSender;
    }

    function setMessage(text) {
        message = text;
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    };
}

const messanger1 = createMessenger();
messanger1.sendMessage("Ann");
messanger1.setSender("BIONIC");
messanger1.setMessage("Hello");

const messanger2 = createMessenger();
messanger2.sendMessage("James");

run();

