// function charCount(str) {
//   let charObj = {};

//   for (let char of str) {
//     if (char !== ' ') {
//       if (!charObj[char]) {
//         charObj[char] = 0;
//       }
//       charObj[char]++;
//     }
//   }
//   console.log(charObj);
// }
// charCount('hello world');

function charCount(str) {
  let charObj = {};

  for (let char of str) {
    if (char !== ' ') {
      charObj[char] = ++charObj[char] || 1;
    }
  }
  console.log(charObj);
}
charCount('hello world');
