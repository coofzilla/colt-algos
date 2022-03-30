function getLongestWordOfMixedElements(arr) {
  if (!arr.length) return "";
  let strArr = [];
  for (let el of arr) {
    if (typeof el === "string") {
      strArr.push(el);
    }
  }
  if (!strArr.length) return "";
  let longest = strArr[0];
  for (let str of strArr) {
    if (str.length > longest.length) longest = str;
  }
  return longest;
}

var output = getLongestWordOfMixedElements([3, "word", 5, "up", 3, 1]);
console.log(output); // --> 'word'
