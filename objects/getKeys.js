var input = {
  name: "Sam",
  age: 25,
  hasPets: true,
};

// ['name', 'age', 'hasPets']

var alternativeInput = {
  a: "a",
  number: 11,
  hungry: true,
  grammyWins: 1,
};

// ['a', 'number', 'hungry', 'grammyWins']

function getAllKeys(obj) {
  let keys = [];
  for (let el in obj) {
    keys.push(el);
  }
  return keys;
}

getAllKeys(input);
