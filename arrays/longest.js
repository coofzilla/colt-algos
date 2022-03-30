function getLongestElement(arr) {
  if (!arr.length) return "";
  let longest = arr[0];

  for (let el of arr) {
    console.log(longest);
    if (el.length > longest.length) {
      longest = el;
    }
  }
  return longest;
}

var output = getLongestElement(["one", "two", "three"]);
console.log(output); // --> 'three
