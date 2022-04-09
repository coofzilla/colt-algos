// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

transposeTwoStrings(["Hello", "World"]);

function transposeTwoStrings(arr) {
  const firstWord = arr[0];
  const secondWord = arr[1];
  let transposed = ``;

  for (let i = 0; i < firstWord.length; i++) {
    transposed += `${firstWord[i]} ${secondWord[i]}\n`;
  }
  return transposed;
}

// should return:
// H W
// e o
// l r
// l l
// o d
