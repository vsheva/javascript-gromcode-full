/* ===> 1 <=== */

/*
 * successPromise должен зарезолвить число 67
 * Ответьте себе на вопрос, какой тип данных имеет переменная successPromise
 */

const successPromise = new Promise(resolve => {
    resolve(67)
});

console.log(successPromise)

/*
 * допишите обработчик успешного промиса (аргументы и тело ф-ции onSuccess)
 * чтобы в консоль вывелся квадрат числа, которое резолвиться из successPromise
 */

successPromise.then(function onSuccess(number) {
    /* ...code here */
    console.log(number*number);
});

/*
 * в обработчике ошибок промиса (ф-ция onError внутри .catch()) выведите в консоль текст 'I am an error'
 * текст вывелся в консоль?
 * подумайте почему
 * потому что промис находится в состоянии fulfilled (resolve). Может находиться только в одном состоянии
 * нет reject в промисе
 */
successPromise.catch(function onError() {
    /* ...code here */
    console.log(`I am an error`)
});
