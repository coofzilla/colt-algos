const myObj = {};

const addProperty = (obj, key) => {
  return (obj[key] = true);
};

addProperty(myObj, "myProperty");
console.log(myObj.myProperty); // --> true
