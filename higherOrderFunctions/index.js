function message() {
  return 'secret message';
}

function reveal(message) {
  console.log(message);
}
//A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
reveal(message());
