function getIndexOf(char, str) {
  const strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === char) {
      return i;
    }
    if (i === strArr.length - 1) return -1;
  }
}

var output = getIndexOf("a", "I am a hacker");
console.log(output); // --> 2
