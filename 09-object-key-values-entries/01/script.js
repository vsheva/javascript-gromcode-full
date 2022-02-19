

const getAdults = userObj =>{
    let userArray = Object.entries(userObj);
    let filteredUserArray=userArray
        .filter(item=>item[1]>=18);

    let userNames=filteredUserArray.map(item=>item[0])

    return userNames
}

// const getAdults =userObj =>Object.entries(userObj)
//     .filter(item=>item[1]>=18)
//     .map(item=>item[0])

