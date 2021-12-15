const numbers = '8 3 -5 42 -1 0 0 -9 4 7 4 -4';

function highAndLow(numbers) {
  const arr = numbers.split(' ');

  const highest = Math.max(...arr);
  const lowest = Math.min(...arr);

  return `${highest} ${lowest}`;
}

highAndLow(numbers);
