// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  const wordsArr = sentence.split(" ");
  let palindromes = [];
  // iterate words and collect the palindromes
  wordsArr.map((word) => {
    if (isPalindrome(word)) {
      palindromes.push(word);
    }
  });
  // sort the list of palindromes by word length
  palindromes.sort(sortAscendingByLength);
  // return the largest item in the sorted list
  let max = palindromes[0];
  for (let el of palindromes) {
    if (el.length >= max.length) {
      max = el;
    }
  }
  return max;
}

function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  return actual === expected
    ? console.log("passed")
    : console.log(
        `FAILED [${testName}] Expected "${expected}", but got "${actual}"`
      );
}
// TESTS CASES
// isPalindrome("apple");
const sentenceInput = "anna civic kayak hello tomato pineapple repaper";
const actualInput = findLongestPalindrome(sentenceInput);
assertEqual(actualInput, "repaper", "should return longest palindrome");
