function dirReduc(arr) {
  let stack = [];
  let opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };
  for (let direction of arr) {
    if (stack.length > 0 && stack[stack.length - 1] === opposites[direction]) {
      stack.pop();
    } else {
      stack.push(direction);
    }
  }
  return stack;
}

console.log(
  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
);
``;
console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH']));
