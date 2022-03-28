const removeProperty = (obj, key) => {
  return (obj[key] = undefined);
};

const obj = {
  name: "Sam",
  age: 20,
};
removeProperty(obj, "name");
console.log(obj.name); // --> undefined
