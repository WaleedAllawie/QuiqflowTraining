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
        reject('There is an error');
      }
    }, 2000);
  });
}

async function init() {
  await createUser({ name: 'userx', id: 'x' });
  fetchUsers();
}

init();
