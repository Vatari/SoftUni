function rounding(a, b) {
  if (b > 15) {
    b = 15;
  }
  a = a.toFixed(b);
  console.log(parseFloat(a));
}
rounding(3.1415926535897932384626433832795, 2);
