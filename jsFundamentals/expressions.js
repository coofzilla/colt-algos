//funcs are objects
//expression
const square = function (num) {
  console.log(num * num);
};

//declarations hoisted
function squared(num) {
  console.log(num * num);
}

square(7);
squared(8);
