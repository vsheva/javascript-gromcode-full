//algo

//1. create function and starPosition
//2.  loop === в переменную chunk записываем отрезанный ломоть текста  ----если длинна ломоти 0, то выходим
//3. пушим в массив ломоть, первая буква заглавная + остальные
//проверка на ноль
//4.  увеличиваем start position на длинну

//5. склеиваем  с помощью join


// "hvcahrsfbchla" => ["abcd" , "def"] => ["Abcd", "Def"]
//=>"Abcd"\n"Def"




const splitText = (text, len=10) => {
    if (typeof text !== 'string') {
        return null
    }

    const arr = [];
    let startPosition = 0;

    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
        }
        arr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += len;
    }
    return arr.join('\n');
}


console.log(splitText("abcdefgrghhjj", 4))

