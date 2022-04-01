function isEvenWithoutModulo(num) {
  if (num === 0) return 0;

  num = Math.abs(num);
  while (num >= 2) {
    num = num - 2;
  }

  if (num === 1) return false;
  return true;
}
