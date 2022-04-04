const person = {
  firstName: "Jack",
  lastName: "Jacobs",
};
// updateObject(person, "firstName", "Jack");

const expected = {
  firstName: "Jack",
  lastName: "Jacobs",
};

assertObjectsEqual(
  person,
  expected,
  "updates person's existing first name field"
);
// console output:
// passed

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
