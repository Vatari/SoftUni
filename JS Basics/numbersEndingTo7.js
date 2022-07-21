function numbersEndingTo7() {
  for (let i = 7; i <= 1000; i += 1) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }
}
numbersEndingTo7();
