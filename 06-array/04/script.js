function swap(numbers) {
    const [first, ...rest] = numbers
    return [...rest, first]
}


function swapManual(numbers) {
    let newArray = []

    for (let i = 1; i < numbers.length; i++) {   // перебор старого
        newArray.push(numbers[i])                // пушим в новый элементы старого (с нулевым индексом нужно поставить в зад)
    }

    newArray.push(numbers[0])                   //пушим первый элемент в конец нового


    return newArray;
}

console.log(swap([1, 10, 9, 11]));
console.log(swapManual([1, 10, 9, 11]));