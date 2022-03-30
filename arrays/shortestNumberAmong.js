function findSmallestNumberAmongMixedElements(arr) {
  if (!arr.length) return 0;
  let numbersArr = [];
  for (let el of arr) {
    if (Number.isInteger(el)) {
      numbersArr.push(el);
    }
  }
  if (!numbersArr.length) return 0;
  let smallest = numbersArr[0];
  for (let num of numbersArr) {
    if (num < smallest) smallest = num;
  }
  return smallest;
}

var output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
console.log(output); // --> 4
