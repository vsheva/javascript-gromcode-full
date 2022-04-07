const parseUser = (jsonString) => {
    try {
        return JSON.parse(jsonString)
    }
    catch (err) {
        return null
    }
}

const parser = parseUser('{"firstName": "Valerii"}')
console.log(parser)