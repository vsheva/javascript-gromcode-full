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


//vchera
// const message = 'Test';
// const weight = 55;
//
// function run() {
//     console.log('RUN');
// }
//
//
// function createMessenger() {
//     let message = 'Just learn it';
//     let sender = 'Gromcode';
//
//     console.log(weight);
//
//     function sendMessage(name) {
//         console.log(`${name}, ${message}! Your ${sender}`);
//     }
//
//     function setSender(newSender) {
//         sender = newSender;
//     }
//
//     function setMessage(text) {
//         message = text;
//     }
//
//     return {
//         sendMessage,
//         setMessage,
//         setSender,
//     };
// }
//
// const messanger1 = createMessenger();
// messanger1.sendMessage("Ann");
// messanger1.setSender("BIONIC");
// messanger1.setMessage("Hello");
//
// const messanger2 = createMessenger();
// messanger2.sendMessage("James");
//
// run();



// hoisting var example 1
// console.log(message);
// var message = 'Hoisting is here!';

//v3
// var a = 55;
// console.log(a);
//
// if (a) {
//     var a = 1;
//
//     console.log(a);
// }
//
// console.log(a);


// hoisting var example 3
// var a = 77;
// console.log(a);
//
// function print() {
//     var a = 2;
//     console.log(a);
// }
// print();
//
// console.log(a);

// hoisting func example 4
// run();
//
// function run() {
//     console.log('RUN');
// }
//
// stop();
// const stop = function () {
//     console.log('STOP');
// };
//всплывает.не всплывает
//анонимная/неанонимная - callback
//immideatly invoced function

//стрелочная и обычная - синтаксис и контекст

//---------------------------------------------------------------
