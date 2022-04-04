function isValidSubsequence(array, sequence) {
  let arrayIndex = 0;
  let sequenceIndex = 0;
  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++;
    arrayIndex++;
  }
  return sequenceIndex === sequence.length;
}
const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

isValidSubsequence(array, sequence);
