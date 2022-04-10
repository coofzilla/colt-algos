// Flip every pair of characters in a string.

var input =
  "check out how interesting this problem is, it's insanely interesting!";
var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

function flipPairs(input) {
  let flipped = "";
  for (let i = 0; i < input.length; i += 2) {
    if (input[i + 1] === undefined) {
      flipped += input[i];
      break;
    }

    flipped += input[i + 1];
    flipped += input[i];
  }
  return flipped;
}

const result = flipPairs2(input);

function flipPairs2(input) {
  const arr = input.split("");
  const flippedArr = [];

  for (let i = 0; i < arr.length; i += 2) {
    flippedArr.push(arr[i + 1]);
    flippedArr.push(arr[i]);
  }
  return flippedArr.join("");
}
