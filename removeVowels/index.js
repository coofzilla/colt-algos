const string = 'This website is for losers LOL!';

function removeVowels(str) {
  let newString = '';
  for (let char of str) {
    //test returns bool
    if (!/^[aeiou]$/i.test(char)) {
      newString += char;
    }
  }
  return newString;
}

removeVowels(string);
