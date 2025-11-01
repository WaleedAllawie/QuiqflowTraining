/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures.
 *
 */

function deepEquals(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a !== 'object') return a === b;
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (let key of Object.keys(a)) {
    if (!Object.keys(b).includes(key)) return false;
    if (!deepEquals(a[key], b[key])) return false;
  }
  return true;
}

console.log(deepEquals({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } })); // true
console.log(deepEquals({ a: 1, b: { c: 5 } }, { a: 1, b: { c: 6 } })); // false
