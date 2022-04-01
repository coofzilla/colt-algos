//code between {} are blocks
if (true) {
  //BLOCK HERE
  let animal = 'eel';
  // var animal = 'eel'; this can be accessed outside of block; no block f/var
}
// console.log(animal); //undefined

function testVar() {
  var message = 'varmode';
}
// console.log(message);//undefined function scoped

//LEXICAL SCOPE
//nested functions
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
//In other words, a closure gives you access to an outer function's scope from an inner function.

let hero = 'hulk';
function outer() {
  hero = 'Spider-Man';
  //example of closure; references hero
  function inner() {
    //still access hero within nested func
    let cryForHelp = `${hero}, save me!`;
    console.log(cryForHelp);
  }
  inner();
}
outer();
