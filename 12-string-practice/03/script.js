const splitString = (text, len = 10) => {
    if (typeof text !== 'string') {
        return null
    }

    let arrStr = []
    let startPosition = 0

    while (true) {
        let chunk = text.substr(startPosition, len)
        if (chunk.length === 0) {
            break;
        }

        if (chunk.length < len) {
            arrStr.push(chunk.concat(".".repeat(len - chunk.length)))
            break;
            // arrStr.push(`${chunk}${".".repeat(len-chunk.length)}`)
        }

        arrStr.push(chunk)
        startPosition += len
    }

    return arrStr

}

console.log(splitString("abcdefgrghhjj", 4))