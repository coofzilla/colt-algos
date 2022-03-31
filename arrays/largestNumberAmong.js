function getLargestNumberAmongMixedElements(arr) {
  if (!arr.length) return 0;
  let numbersArr = [];
  for (let el of arr) {
    if (Number.isInteger(el)) {
      numbersArr.push(el);
    }
  }
  if (!numbersArr.length) return 0;
  let largest = numbersArr[0];
  for (let num of numbersArr) {
    if (num > largest) largest = num;
  }
  return largest;
}

var output = getLargestNumberAmongMixedElements([3, "word", 5, "up", 3, 1]);
console.log(output); // --> 5
