//overlapping subproblems
//can be broken down into subproblems which are reused several times

//optimal substructure
//constructed from optimal solution from subproblems

//bad O(2^n)
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

fib(1);

//memoized
function fibMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}
