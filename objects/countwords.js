function countWords(str) {
  if (!str) return {};
  const wordObj = {};
  const wordsArr = str.split(" ");

  for (let word of wordsArr) {
    wordObj[word] = ++wordObj[word] || 1;
  }
  return wordObj;
}

var output = countWords("ask a bunch get a bunch");
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
