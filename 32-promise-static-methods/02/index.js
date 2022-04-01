//algo
//1.request (url)=>Promise

//2.getUserASAP(userId) =>  return Promise.race
// --userUrls=  servers.map =>
//-- requests=userUrls.map=> request()
//----return Promice.race(requests)


const getRandomNumbers = (from, to) => from + Math.random() * (to - from);

const request = (url) =>
    new Promise((resolve) => {
    const delay = getRandomNumbers(1000, 3000);

    setTimeout(() => {
        resolve({
            userData: {
                name: "Tom",
                age: 17,
            },
            source: url,
        });
    }, delay)
});


const servers = [
    "https://server.com/us",
    "https://server.com/eu",
    "https://server.com/au",
]


const getUserASAP = (userId) => {
    const userUrls = servers.map((server) => `${server}/${userId}`);
    //request(userUrl) --- создаем конкретный запрос
    const requests = userUrls.map((userUrl) => request(userUrl))

    return Promise.race(requests);
}

getUserASAP("user-id-1")
    .then(data => console.log(data));








