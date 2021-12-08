//build some helpers
//getDigit(num,place) returns digit in num at place

//this gives digit at index, but we want opposite
// function getDigit(num, place) {
//   const numArray = Array.from(String(num), Number);

//   return numArray[place];
// }
// console.log(getDigit(1245, 0));

function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

console.log(getDigit(12345, 0));
