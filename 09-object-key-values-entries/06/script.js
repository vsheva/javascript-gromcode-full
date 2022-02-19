rooms = {
    room1: [
        {name: "Jack"},
        {name: "Andrew"},
        {name: "Vasyl"},
    ],

    room2: [
        {name: "Dan"},
        {name: "Max"},
        {name: "Roma"},
    ],

    room3: [
        {name: "Val"},
        {name: "Mika"},
        {name: "Sam"},
    ],
}


// const getPeople = obj => {
//     return Object.values(obj).flat().map(item=>item.name)
// };
// console.log(getPeople(rooms))
//


const getPeople = obj => {
    return Object.values(obj)
        .reduce((acc, elem) => {
            return acc.concat(elem)
        }, []).map(item => item.name)
};
console.log(getPeople(rooms))

