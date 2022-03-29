var arr = ["a", "c", "e"];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }

function select(arr, obj) {
  let newObject = {};
  for (let i = 0; i < arr.length; i++) {
    //check object at the key of [arr[i]] //'a','c'
    if (obj[arr[i]] !== undefined) {
      newObject[arr[i]] = obj[arr[i]];
    }
  }

  return newObject;
}
