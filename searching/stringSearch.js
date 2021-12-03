//loop over longer string
//loop over loop over shorter string
//if characters dont match, break out of inner loop
//if characters do match keep going
//if complete loop (all match) increment count
//return count
const string =
  'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

function stringSearch(str, searchStr) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < searchStr.length; j++) {
      if (searchStr[j] !== str[i + j]) {
        break;
      }

      if (j === searchStr.length - 1) {
        count++;
      }
    }
  }
  return count;
}
// console.log(stringSearch(string, 'the'));
