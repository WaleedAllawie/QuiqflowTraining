//using callbacks and setTimeOUt

const users = [
  { name: "user1", id: 1 },
  { name: "user2", id: 2 },
  { name: "user3", id: 3 },
];

function fetchUsers() {
  setTimeout(() => {
    users.forEach((user) => {
      console.log(user);
    });
  }, 1000);
}

function createUser(user) {
  setTimeout(() => {
    users.push(user);
  }, 2000);
}
createUser({ name: "user4", id: 4 });
fetchUsers();
