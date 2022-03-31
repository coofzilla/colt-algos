function computeCompoundInterest(
  principal,
  interestRate,
  compoundingFrequency,
  timeInYears
) {
  const compoundedInterest = Math.pow(
    1 + interestRate / compoundingFrequency,
    timeInYears * compoundingFrequency
  );
  return principal * compoundedInterest - principal;
}

var output = computeCompoundInterest(1500, 0.043, 4, 6);
console.log(output); // --> 438.8368221341061
