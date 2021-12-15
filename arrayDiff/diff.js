let a = [1, 2, 3];
let b = [1, 2];

function arrayDiff(a, b) {
  const filtered = a.filter((el) => !b.includes(el));
  console.log(filtered);
}
arrayDiff(a, b);
