// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

var input = "a short example";
var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'
function flipEveryNChars(input, n) {
  let array = input.split("");

  const flipped = array.reduce((previousValue, el, index, array) => {
    array = array.splice(0, n);
    previousValue += array.reverse().join("");

    return previousValue;
  }, "");

  return flipped;
}

const result = flipN(input, 5);
console.log(result);

function flipN(input, n) {
  const arr = input.split("");
  const flippedArr = [];

  while (arr.length) {
    flippedArr.push(arr.splice(0, n).reverse().join(""));
  }

  return flippedArr.join("");
}
