function perfectNumberFunction(num) {
  let sum = 0;
  let newArr = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      newArr.push(i);
      sum += i;
    }
  }

  if (sum == num) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
perfectNumberFunction(3);
