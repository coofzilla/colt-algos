//indexOf returns index of input of arr
//else returns -1
const usernames = ['bob', 'chris', 'jeff'];

console.log(usernames.indexOf('bob'));
const numbers = [1, 2, 3, 4, 4, 5, 65, 3, 1, 3];

function linearSearch(arr, value) {
  return arr.indexOf(value);
}

//console.log(linearSearch(numbers, 65));

function linearSearchLoop(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

// console.log(linearSearchLoop(numbers, 65));

function numberCompare(num1, num2) {
  //   console.log(num1, num2);
  return num1 - num2;
}
// console.log([6, 4, 15, 10].sort(numberCompare));
// const sort = numbers.sort((a, b) => {
//   console.log(a, b);
//   return a - b;
// });
//if return negative number sort a before b
//if return 0 leave a and b unchanged
//if greater than 0 sort b before a
// console.log(numbers.sort((a, b) => b - a));
