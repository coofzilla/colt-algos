// Sample Input
var classList = [
  "Joe",
  "Jack",
  "John",
  "Fred",
  "Frank",
  "Barry",
  "Larry",
  "Mary",
  "Harry",
  "Farrell",
  "Susan",
  "Monica",
  "Keira",
  "Caroline",
  "Harriet",
  "Erica",
  "Luann",
  "Cheryl",
  "Beth",
  "Rupa",
  "Linda",
  "Allison",
  "Nancy",
  "Dora",
];

// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  let classWithAges = [];
  // creates an object for each string in the input array, with an age of 10 or 11
  for (let student of classList) {
    classWithAges.push({
      name: student,
      age: getRandomIntInclusive(10, 11),
    });
  }
  // returns an array of these objects
  return classWithAges;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertClassWithAges(classList, testName) {
  for (let obj of classList) {
    if (obj.age < 10 || obj.age > 11) return console.log("failed");
  }
  return console.log("passed");
}
// TESTS CASES
assertClassWithAges(
  decorateClassListWithAges(classList),
  "verifies class list is an array of objects with a name and age"
);
