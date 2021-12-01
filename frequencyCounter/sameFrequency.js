function sameFrequency(numOne, numTwo) {
  const stringifiedOne = numOne.toString();
  const stringifiedTwo = numTwo.toString();

  let objectOne = {};
  let objectTwo = {};

  for (let digit of stringifiedOne) {
    objectOne[digit] = ++objectOne[digit] || 1;
  }
  for (let digit of stringifiedTwo) {
    objectTwo[digit] = ++objectTwo[digit] || 1;
  }
  for (let value in objectOne) {
    if (objectOne[value] === objectTwo[value]) {
      return true;
    } else {
      return false;
    }
  }
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
