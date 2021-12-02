//simple examples

function countDown(num) {
  //base case(halting function)
  if (num <= 0) {
    console.log('FINISHED');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// countDown(5);

//sum all numbers up to n
function sumRange(num) {
  if (num === 1) return 1;

  const total = num + sumRange(num - 1);
  //4 + sumRange(3)
  //3 + sumRange(2)
  //2 + sumRange(1)
  //return 1
  //goes back up with return value
  //10 returned
  console.log(total);
  return total;
}
// sumRange(4);

//iterative factorial
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  console.log(total);
  return total;
}
//factorial(5);

function recursiveFactorial(num) {
  if (num === 1) return 1;
  return num * recursiveFactorial(num - 1);
}

// console.log(recursiveFactorial(5));
