const checkAge = (name, age) => {
  if (age < 21) return `Go home, ${name}!`;
  return `Welcome, ${name}!`;
};

var output = checkAge("Adrian", 22);
console.log(output); // --> 'Welcome, Adrian!'
