function flatten(...args) {
  const result = [];

  for (let item of args) {
    if (Array.isArray(item)) {
      result.push(...flatten(...item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatten(1, [2, 3], 4, 5, [6, [7]])); // returns [1, 2, 3, 4, 5, 6, 7]
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']])); // returns ['a', 'b', 2, 3, null, 4, 'c']
