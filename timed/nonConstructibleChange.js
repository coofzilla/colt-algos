const coins = [5, 7, 1, 1, 2, 3, 22];

function minSumCoins(arr) {
  if (!arr.length) return 1;

  let coinsArr = arr.sort((a, b) => a - b);
  let changeSum = 0;

  for (let coin of coinsArr) {
    if (coin > changeSum + 1) return changeSum + 1;
    changeSum += coin;
  }
  return changeSum + 1;
}

const min = minSumCoins(coins);
console.log(min);
