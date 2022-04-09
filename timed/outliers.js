// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1"); //=> 2 - Second number is even, while the rest of the numbers are odd

function detectOutlierValue(stringOfNums) {
  let arr = stringOfNums.split(" ");
  let odds = [];
  let evens = [];
  let resultIndex;

  arr.reduce((previous, current, index, array) => {
    if (current % 2 === 0) evens.push({ value: current, index: index + 1 });
    if (current % 2 !== 0) odds.push({ value: current, index: index + 1 });
    return previous;
  }, {});
  if (odds.length > evens.length) {
    resultIndex = evens[0].index;
    return resultIndex;
  }

  resultIndex = odds[0].index;
  return resultIndex;
}
