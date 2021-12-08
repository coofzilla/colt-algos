//build some helpers
//getDigit(num,place) returns digit in num at place

function getDigit(num, place) {
  const numArray = Array.from(String(num), Number);
  for (let digit of numArray) {
    if (digit === place) {
      return digit;
    }
  }
}
getDigit(1245678, 8);
