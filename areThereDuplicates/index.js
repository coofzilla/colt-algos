// areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
// areThereDuplicates('a', 'b', 'c', 'a'); // true

function areThereDuplicates(...args) {
  let charCount = {};
  for (let char of args) {
    charCount[char] = ++charCount[char] || 1;
  }

  for (let value in charCount) {
    if (charCount[value] !== 1) {
      return true;
    }
  }
  return false;
}
