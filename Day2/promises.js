//using promises

const users = [
  { name: 'user1', id: 1 },
  { name: 'user2', id: 2 },
  { name: 'user3', id: 3 },
];

function fetchUsers() {
  setTimeout(() => {
    users.forEach((user) => {
      console.log(user);
    });
  }, 1000);
}

function createUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);
      const err = false;
      if (!err) {
        resolve();
      } else {
        reject('Error');
      }
    });
  }, 2000);
}

createUser({ name: 'user4', id: 4 })
  .then(fetchUsers)
  .catch((err) => console.log(err));
