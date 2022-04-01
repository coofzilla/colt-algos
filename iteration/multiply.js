function multiply(num1, num2) {
  let resultIsPositive = true;
  if ((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)) {
    resultIsPositive = false;
  }
  //how to deal with negatives
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  let total = 0;
  for (let i = 0; i < num2; i++) {
    total += num1;
  }
  if (resultIsPositive) return total;
  return -total;
}

var output = multiply(4, 7);
console.log(output); // --> 28
