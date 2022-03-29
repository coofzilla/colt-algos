const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  b: 4,
  c: 3,
};

extend(obj1, obj2);

// Add any keys that are not in the 1st object.
// If the 1st object already has a given key, ignore it (do not overwrite the property value).
// Do not modify the 2nd object at all.

function extend(obj1, obj2) {
  for (let prop in obj2) {
    obj1[prop] = obj1[prop] || obj2[prop];
  }
}

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
