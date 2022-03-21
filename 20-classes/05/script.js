// algo

// create class User => constructor(id, name, sessionId)
// геттеры get id(), get name(), get sessionID()
//  getUserNames
//getUserIds
// method getUserNameById(id)

//------------------------------------------------------------------------


export class User {
  constructor(id, name, sessionId) {
    this.id = id;
    this.name = name;
    this.sessionId = sessionId;
  }

  get id() { return this.id; }
  get name() { return this.name; }
  get sessionId() { return this.sessionId; }

}


export class UserRepository {
  constructor(users) {
    this.users = Object.freeze(users);
  }

  get users() { return this.users; }

  getUserNames() {
    return this.users.map(user=>user.name)
  }

  getUserIds() {
    return this.users.map(user=>user.id)
  }

  getUserNameById(id) {
    for (let elem of this.users) {
      if(elem.id===id) {
        return elem.name
      }
    }
  }
}









//
// export class User {
//   constructor(id, name, sessionId) {
//     this._id = id;
//     this._name = name;
//     this._sessionId = sessionId;
//   }
//
//   get id() {
//     return this._id;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   get sessionId() {
//     return this._sessionId;
//   }
// }
// export class UserRepository {
//   constructor(users) {
//     this._users = Object.freeze(users);
//   }
//
//   get users() {
//     return this._users;
//   }
//
//   getUserNames() {
//     return this._users.map(user => user.name);
//   }
//
//   getUserIds() {
//     return this._users.map(user => user.id);
//   }
//
//   getUserNameById(id) {
//     for (const elem of this._users) {
//       if (elem.id === id) {
//         return elem.name;
//       }
//     }
//   }
// }




// examples
const user2 = new UserRepository([{ id: 2, name: 'Bob', sessionId: 'id' }]);
console.log(user2.getUserIds());
console.log(user2.getUserNameById(2));
console.log(user2.getUserNames());
user2.users = { id: 4, name: 'Bfghb', sessionId: 'i' };
console.log(user2.users);

const user = new User('1', 'Tom', 'session-id');
console.log(user.id); // '1'
console.log(user.name); // 'Tom'
console.log(user.sessionId); // 'session-id'

user.id = 2;
console.log(user.id);
// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
