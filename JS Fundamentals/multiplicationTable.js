function multiplicationTable(num) {
  let sum = 0;
  for (i = 1; i <= 10; i++) {
    let str = "";
    for (j = 1; j <= i; j++) {
      sum = num * i;
    }

    console.log(`${num} X ${i} = ${sum}`);
  }
}
multiplicationTable(5);
multiplicationTable(7);

