function sumDigits(num) {
  let total = 0;
  const numString = num.toString();

  if (isNaN(numString[0])) {
    let firstNum = numString[1];
    for (let i = 1; i < numString.length; i++) {
      total += Number(numString[i]);
    }
    return total - firstNum - firstNum;
  }

  for (let i = 0; i < numString.length; i++) {
    total += Number(numString[i]);
  }
  return total;
}

// var output = sumDigits(1148);
// console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> 4
