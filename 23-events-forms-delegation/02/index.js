const generateNumbersRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i += 1) {
        result.push(i);
    }
    return result;
};


//1. линия сидений
const getLineSets = () =>
    generateNumbersRange(1, 10)
        .map(seatNumber => `
         <div
           class="sector__seat"
           data-seat-number="${seatNumber}"
         ></div>`)
        .join('');


//2. генерируем строки внутри сектора
const getSectorLines = () => {
    //высчитывает 1 раз, а не 10 и помещаем в ${seatsStirng} (замена getSectorLines)
    const seatsStirng = getLineSets();

    //вставили generateNumbersRange,генерируем линии
    return generateNumbersRange(1, 10)
        .map(lineNumber => `
         <div
           class="sector__line"
           data-line-number="${lineNumber}"
         >${seatsStirng}</div>`)
        //линию заполняем сидениями (см.выше) и склеиваем в строку, после чего строка
        //в ${linesString} ниже
        .join('');
};


//генерируем 3 сектора
//join и вставим в элемент arena
const arenaElem = document.querySelector('.arena');

const renderArena = () => {
    const linesString = getSectorLines();

    const sectorsString = generateNumbersRange(1, 3)
        .map(sectorNumber => `
         <div
           class="sector"
           data-sector-number="${sectorNumber}"
         >${linesString}</div>`)
        .join('');

    arenaElem.innerHTML = sectorsString;
};


//делигирование
const onSeatSelect = event => {
    //проверить, сидение или нет т.е. класс ".sector__seat":  метод cclassList.contains('sector__seat')
    const isSeat = event.target.classList.contains('sector__seat');
    //если несидение - выхидим
    if (!isSeat) {
        return;
    }

    //cбор всей информации по расположению сидения
    // data-sector-number => dataset.sectorNumber
    //элемент, по к-ому кликнули - берем ближайший элемент (родитель) с классом .sectror - это нужный сектор
    const sectorNumberElem = event.target.closest('.sector').dataset.sectorNumber;
    const seatNumberElem = event.target.dataset.seatNumber;
    //линия - это родительский элемент для сидения =чтобы получить ее, метод closest(это линиия, в которой сидение)
    //dataset.lineNumber
    const lineNumberElem = event.target.closest('.sector__line').dataset.lineNumber;


    //выбираем элемент для вставки данных
    const selectedSeatElem = document.querySelector('.board__selected-seat');
    //вставляем текст через textContent (текст выводится как есть), append, prepend,innerHTML (если сами)
    selectedSeatElem.textContent = `S ${sectorNumberElem} - L ${lineNumberElem} - S ${seatNumberElem}`;
};

//обработчик
//const arenaElem = document.querySelector('.arena');
arenaElem.addEventListener('click', onSeatSelect);


renderArena();