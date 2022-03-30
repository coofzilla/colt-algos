function getLengthOfShortestElement(arr) {
  if (!arr.length) return 0;
  let shortest = arr[0].length;
  for (let el of arr) {
    if (el.length < shortest) {
      shortest = el.length;
    }
  }
  return shortest;
}

var output = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output); // --> 3
