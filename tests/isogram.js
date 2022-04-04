// Skeleton
const string = "asdf";
// FUNCTION DEFINITION(S)
function isIsogram(text) {
  // add each char to a set
  const textSet = new Set(text);

  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  if (text.length !== textSet.size) return false;
  return true;
}

// ASSERTION FUNCTION(S) TO BE USED
console.log(isIsogram(string));
// TESTS CASES
