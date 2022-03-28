var obj = {
  key: "value",
};
var output = getProperty(obj, "key");

function getProperty(obj, key) {
  return obj[key];
}

console.log(output); // --> 'value'
