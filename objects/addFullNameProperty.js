const person = {
  firstName: "Jade",
  lastName: "Smith",
};

//define fullName property and assign it to the first and last name
function addFullNameProperty(obj) {
  obj.fullName = `${obj.firstName} ${obj.lastName}`;
}

addFullNameProperty(person);
