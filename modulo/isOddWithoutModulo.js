function isOddWithoutModulo(num) {
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
  if (modulo(num, 2) !== 0) {
    return true;
  }
  return false;
}
