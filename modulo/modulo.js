function modulo(num1, num2) {
  const quotient = parseInt(num1 / num2);
  const product = quotient * num2;
  const remainder = num1 - product;
  if (Math.sign(num1) === -1) {
    return -remainder;
  }
  return remainder;
}

var output = modulo(25, 4);
console.log(output); // --> 1
