//Anagrams
//validAnagram('abc','cba') //true
//validAnagram('','') //true
//validAnagram('aaz', 'zza') //false

//str.split('').reverse().join('') this is for string reversal

function validAnagram(str1, str2) {
  let strObj1 = {};
  let strObj2 = {};

  for (let key of str1) {
    strObj1[key] = (strObj1[key] || 0) + 1;
  }

  for (let key of str2) {
    strObj2[key] = (strObj2[key] || 0) + 1;
  }

  for (let key in strObj1) {
    if (strObj1[key] !== strObj2[key]) {
      return false;
    }
    return true;
  }
}

validAnagram('hello', 'lolhe'); //true
// validAnagram('aaz', 'zza'); //false
// validAnagram('anagram', 'nagaram'); //true
// validAnagram('rat', 'car'); //false
// validAnagram('awesome', 'awesom'); //false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'); //false
// validAnagram('qwerty', 'qeywrt'); //true
// validAnagram('texttwisttime', 'timetwisttext'); //true
