const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const result = objectOrArr(arr, filterEven);
console.log(result);

function filterEven(el) {
  return el % 2 === 0;
}

function objectOrArr(element, filterFunc) {
  let isArr = false;
  if (element.length) isArr = true;

  let evens = [];

  if (isArr) {
    for (let el of element) {
      if (filterFunc(el)) evens.push(el);
    }
  }
  if (!isArr) {
    for (let el in element) {
      console.log(el);
    }
  }

  return evens;
}
