const array = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

function twoNumberSum(array, targetSum) {
  //arr.length -1 up to second to last number
  //since the second loop adds + 1, saves you an additional loop
  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }

  return [];
}

twoNumberSum(array, target);
