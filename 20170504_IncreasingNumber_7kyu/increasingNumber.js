function increasingNumber(x,n) {
  for (var i=1; i<=n; i++) {
    while (x % i !== 0) x++;
  }
  return x;
}