function findShortestWordAmongMixedElements(arr) {
  let stringArr = [];
  for (let el of arr) {
    if (typeof el === "string") {
      stringArr.push(el);
    }
  }
  if (!stringArr.length) return "";
  let shortest = stringArr[0];
  for (let el of stringArr) {
    if (el.length < shortest.length) shortest = el;
  }
  return shortest;
}

var output = findShortestWordAmongMixedElements([4, "two", 2, "three"]);
console.log(output); // --> 'two'
