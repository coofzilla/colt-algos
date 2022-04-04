var blackjackScore = 20;
assertWithinRange(
  4,
  21,
  blackjackScore,
  "blackjack score should be between 4 and 21"
);
// console output:
// passed

function assertWithinRange(low, high, actual, testName) {
  if (actual > low && actual < high) return console.log("passed");
  return console.log(
    `FAIL [${testName}] "${actual}" not within range ${low} to ${high}`
  );
}
