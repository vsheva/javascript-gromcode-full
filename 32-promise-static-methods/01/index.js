'use strict';

// algo
//new Promise()
//  if (userId === 'broken') -> reject(new Error)
// else -> resolve {}

const requestUserData = userId => {
  const promise = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });

  return promise;
};

requestUserData('broken')
    .catch(error => {
        console.log(error);
        throw new Error("Error");
    })
   .then(data => console.log(data))
    .catch(error => console.log(error)
  .finally(() => console.log('Hello')))
