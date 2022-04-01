function transformFirstAndLast(array) {
  let obj = {};
  obj[array[0]] = array[array.length - 1];

  return obj;
}

var input = ["Queen", "Elizabeth", "Of Hearts", "Beyonce"];

transformFirstAndLast(input);
//OUTPUT
// {
//   Queen: "Beyonce";
// }
