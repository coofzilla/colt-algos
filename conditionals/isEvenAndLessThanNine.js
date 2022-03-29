function isEitherEvenAndLessThan9(num1, num2) {
  const isEven = (num) => {
    return num % 2 === 0;
  };

  if (isEven(num1) || isEven(num2)) {
    if (num1 < 9 && num2 < 9) {
      return true;
    }
  }
  return false;
}

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false
