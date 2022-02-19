


//algo
//1. round from, round to
//2. create randomNumberArray
//3. loop through each element  of array и присваиваем его каждому элементу формулу
//4.return итоговый массив

const getRandomNumbers = (length, from, to) => {

    if (to-from<1) {
        return null
    }

    from = Math.ceil(from);
    to = Math.floor(to);

    let randomNumbersArray=[]

    for (let i=0; i<length; i++){
        randomNumbersArray[i]=Math.floor(Math.random() * (to - from) + from);
    }

    return randomNumbersArray

};




// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(3, 1.4, 6.22)); // ==>