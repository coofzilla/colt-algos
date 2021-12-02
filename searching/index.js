//indexOf returns index of input of arr
//else returns -1
const usernames = ['bob', 'chris', 'jeff'];

//console.log(usernames.indexOf('bob'));
const numbers = [1, 2, 3, 4, 4, 5, 65, 3, 1, 3];

function linearSearch(arr, value) {
  return arr.indexOf(value);
}

console.log(linearSearch(numbers, 65));
