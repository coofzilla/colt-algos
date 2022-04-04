// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  const firstName = obj.firstName;
  const lastName = obj.lastName;

  if (firstName && lastName) {
    obj["fullName"] = firstName + " " + lastName;
  }

  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
  for (let key in expected) {
    if (!actual[key]) {
      return console.log(
        `FAILED [${testName}] Expected ${JSON.stringify(
          expected
        )}, but got ${JSON.stringify(actual)}`
      );
    }
  }

  for (let key in actual) {
    if (actual[key] !== expected[key]) {
      return console.log(
        `FAILED [${testName}] Expected ${JSON.stringify(
          expected
        )}, but got ${JSON.stringify(actual)}`
      );
    }
  }
  return console.log("passed");
}
// TESTS CASES
const person = {
  firstName: "Chris",
  lastName: "Riccolo",
};
const expectedOutput = {
  firstName: "Chris",
  lastName: "Riccolo",
  fullName: "Chris Riccolo",
};
const actualName = addFullNameProp(person);
assertObjectsEqual(
  actualName,
  expectedOutput,
  "should add a property with the full name of the person"
);
