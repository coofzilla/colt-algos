function findMinLengthOfThreeWords(word1, word2, word3) {
  let charCount = {};
  for (let el of arguments) {
    charCount[el] = el.length;
  }
  let min;

  for (let key in charCount) {
    if (!min) min = charCount[key];
    if (charCount[key] < min) {
      min = charCount[key];
    }
  }
  return min;
}
var output = findMinLengthOfThreeWords("a", "be", "see");
console.log(output); // --> 1
