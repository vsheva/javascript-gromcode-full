// const sortContacts = (contacts, bool) => {
//     if (!Array.isArray(contacts)) {
//         return null
//     }

//     if (bool === false) {
//         return contacts.sort((a, b) => {
//             return b.name.localeCompare(a.name)
//         })
//     } else {
//         return contacts.sort((a, b) => {
//             return a.name.localeCompare(b.name)
//         })
//     }
// }


// const contacts = [
//     {
//         name: 'Tom',
//         phoneNumber: '777-77-77'
//     },
//     {
//         name: 'Kate',
//         phoneNumber: '777-77-77'
//     },
//     {
//         name: 'Luise',
//         phoneNumber: '777-77-77'
//     },
//     {
//         name: 'Richard',
//         phoneNumber: '777-77-77'
//     },
//     {
//         name: 'Ann',
//         phoneNumber: '777-77-77'
//     },
//     {
//         name: 'Robert',
//         phoneNumber: '777-77-77'
//     },
//     {
//         name: 'Nensi',
//         phoneNumber: '777-77-77'
//     },
//     {
//         name: 'Daniel',
//         phoneNumber: '777-77-77'
//     },
// ]

// console.log(sortContacts(contacts, true))



const sortContacts = (contacts, bool) => {
    if(!Array.isArray(contacts)) {
        return null
    }

    if (bool) {
        return contacts.sort((a,b)=>{
            return a.name.localeCompare(b.name)
        })
    }
    else {
        return contacts.sort((a,b)=>{
            return b.name.localeCompare(a.name)
        })
    }

}


const contacts = [
    {
        name: 'Tom',
        phoneNumber: '777-77-77'
    },
    {
        name: 'Kate',
        phoneNumber: '777-77-77'
    },
    {
        name: 'Luise',
        phoneNumber: '777-77-77'
    },
    {
        name: 'Richard',
        phoneNumber: '777-77-77'
    },
    {
        name: 'Ann',
        phoneNumber: '777-77-77'
    },
    {
        name: 'Robert',
        phoneNumber: '777-77-77'
    },
    {
        name: 'Nensi',
        phoneNumber: '777-77-77'
    },
    {
        name: 'Daniel',
        phoneNumber: '777-77-77'
    },
]

console.log(sortContacts(contacts, false))