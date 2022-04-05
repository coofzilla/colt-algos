// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual word into individual letters.
  const wordArr = word.split("");
  // Count the instances of each letter
  const charCounts = wordArr.reduce((charObj, char) => {
    charObj[char] = ++charObj[char] || 1;
    //passes in the return value from previous calc on element
    return charObj;
  }, {});
  // Iterate all the counts and find the highest
  let max = 0;
  for (let key in charCounts) {
    if (charCounts[key] > max) max = charCounts[key];
  }
  // Return this word's max repeat count
  return max;
}

function findFirstWordWithMostRepeatedChars(text) {
  let maxRepeatCountOverall = 0;
  let wordWithMaxRepeatCount = "";

  // Break up input text into words (space-delimited).
  const wordsArr = text.split(" ");
  // For each word...
  wordsArr.map((word) => {
    const repeatCountForWord = findMaxRepeatCountInWord(word);

    if (repeatCountForWord > maxRepeatCountOverall) {
      maxRepeatCountOverall = repeatCountForWord;
      wordWithMaxRepeatCount = word;
    }
  });
  // If that max repeat count is higher than the overall max repeat count, then
  // update maxRepeatCountOverall
  // update wordWithMaxRepeatCount

  return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) return console.log("passed");
  return console.log(
    `FAILED [${testName}] Expected ${expected}, but got ${actual}`
  );
}
// TESTS CASES
// const input1 = "accept";
// const actual1 = findMaxRepeatCountInWord(input1);
// const expected1 = 2;
// assertEqual(actual1, expected1, "should return the count of max repeat chars");

const input2 = "I passed my exam are you not entertained";
const actual2 = findFirstWordWithMostRepeatedChars(input2);
const expected2 = "entertained";
assertEqual(actual2, expected2, "should return the word with max repeat chars");
