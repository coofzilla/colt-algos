//overlapping subproblems
//can be broken down into subproblems which are reused several times

//optimal substructure

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
