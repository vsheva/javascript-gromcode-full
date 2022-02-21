let calc = (expression) => {
    let result;
  let array = expression.split(" ");

  switch (array[1]) {
        case "+" :
            result = +array[0] + +array[2]
            break;

        case "-" :
            result = array[0] - array[2];
            break;

        case "*" :
            result = array[0] * array[2];
            break;

        case "/" :
            result = array[0] / array[2];
            break;
  }

    return (`${expression} = ${result}`);
}

console.log(calc("7 - 16"))