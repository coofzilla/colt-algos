// Skeleton
// FUNCTION DEFINITION(S)
function isIsogram(text) {
  // add each char to a set
  if (text === "") return true;
  text = text.toLowerCase();
  const textSet = new Set(text);

  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  return text.length === textSet.size;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) return console.log("passed");
  return console.log(
    `FAILED [${testName}] Expected "${expected}", but got "${actual}"`
  );
}
// TESTS CASES
const inputPass = "abcdefg";
const actualPass1 = isIsogram(inputPass);
assertEqual(
  actualPass1,
  true,
  "should return true for an isogram with all lower case"
);

const inputPass2 = "sTop";
const actualPass2 = isIsogram(inputPass2);
assertEqual(
  actualPass2,
  true,
  "should return true for an isogram with mixed case"
);

const inputFail = "stopped";
const actualFail = isIsogram(inputFail);
assertEqual(
  actualFail,
  false,
  "should return false for a nonisogram with lowercase"
);

const inputfail2 = "aAzrj";
const actualFail2 = isIsogram(inputfail2);
assertEqual(
  actualFail2,
  false,
  "should return false for a nonisogram with mixed case"
);
