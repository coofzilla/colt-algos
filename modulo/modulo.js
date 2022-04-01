// function modulo(num1, num2) {
//   const quotient = parseInt(num1 / num2);
//   const product = quotient * num2;
//   const remainder = num1 - product;
//   if (Math.sign(num1) === -1) {
//     return -remainder;
//   }
//   return remainder;
// }

function modulo(num1, num2) {
  if (num1 === 0) return 0;
  if (num2 === 0) return NaN;
  if (isNaN(num1) || isNaN(num2)) return NaN;

  //create bool flag
  let resultIsPositive = true;
  if (num1 < 0) resultIsPositive = false;
  //make positive versions of num1 and num2
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  while (num1 >= num2) {
    num1 = num1 - num2;
  }
  //check result positive
  if (resultIsPositive) return num1;

  //if negative return w/negative
  return -num1;
}

var output = modulo(25, 4);
console.log(output); // --> 1
