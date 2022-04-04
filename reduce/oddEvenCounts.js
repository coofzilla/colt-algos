const numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];
const oddEvenCounts = numbers.reduce(
  (counts, number, index, array) => {
    function isOdd(number) {
      return number % 2 !== 0;
    }
    if (isOdd(number)) {
      counts.odd++;
    } else {
      counts.even++;
    }
    return counts;
  },
  { odd: 0, even: 0 }
);

console.log(oddEvenCounts);
