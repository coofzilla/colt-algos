// Is one string a rotated version of another?

// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'
// If you double the string, you'll be able to find another string inside the doubled string using familiar String methods.

// Doubled string: 'hello worldhello world'
// Search w/in it: 'orldhello w'

function isRotated(str1, str2) {
  const doubled = str1 + str1;
  return doubled.includes(str2);
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    return console.log("passed");
  }
  return console.log("failed");
}

const actuallyRotated = isRotated("hello world", "orldhello w");
const expected = true;
assertEqual(
  actuallyRotated,
  expected,
  "should be true when string is inside it"
);

const actualNot = isRotated("hello world", "world hello");
const expectedNot = false;
assertEqual(
  actualNot,
  expectedNot,
  "should return false when string not inside"
);
