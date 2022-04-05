const url = 'https://61eaff907ec58900177cdb49.mockapi.io/api/v1/users';

export function getUsersList() {
    return fetch(url)
        .then(response => response.json())
}


export function getUserById (userId) {
    return fetch(`${url}/${userId}`)
        .then(response => response.json())
}


export function createUser(userData) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
}

export function deleteUser(userId) {
    return fetch (`${url}/${userId}`, {
        method: 'DELETE',
    })
}



export function updateUser(userId,userData ) {
    return fetch (`${url}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body:JSON.stringify(userData)
    })
        .then(response => response.json())
}




// examples
getUsersList().then(users => {
    console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('2').then(userData => {
    console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});


const newUserData = {
    email: 'cool@email.com',
    firstName: 'Valerii',
    lastName: 'Shevchenko',
    age: 40,
};

createUser(newUserData).then(() => {
    console.log('User created');
});


const updatedUserData = {
    email: 'new@email.com',
    firstName: 'Roman',
    lastName: 'Shevchenko',
    age: 17,
};

updateUser( updatedUserData, '1',).then(() => {
    console.log('User updated');
});

deleteUser('2').then(() => {
    console.log('User updated');
});
