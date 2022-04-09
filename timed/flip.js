// Flip every pair of characters in a string.

var input =
  "check out how interesting this problem is, it's insanely interesting!";
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

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
