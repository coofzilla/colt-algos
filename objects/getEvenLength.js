function getEvenLengthWordsAtProperty(obj, key) {
  if (!obj[key]) return [];
  if (!Array.isArray(obj[key])) return [];

  let elements = [];

  for (let el of obj[key]) {
    if (el.length % 2 === 0) {
      elements.push(el);
    }
  }

  return elements;
}

var obj = {
  key: ["a", "long", "game"],
};
var output = getEvenLengthWordsAtProperty(obj, "key");
console.log(output); // --> ['long', 'game']
