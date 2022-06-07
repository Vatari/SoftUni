function add(num) {
  let sum = 0;

  function returned(x) {
    sum += x;

    return returned;
  }
  returned.toString = () => sum;
  return returned(num);
}
add(1);
add(1)(6)(-3);
