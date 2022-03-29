function findMaxLengthOfThreeWords(word1, word2, word3) {
  let max = word1.length;
  for (let key in arguments) {
    //arguments[key].length is the length of each word
    if (arguments[key].length > max) max = arguments[key].length;
  }
  return max;
}

var output = findMaxLengthOfThreeWords("a", "be", "see");
console.log(output); // --> 3
