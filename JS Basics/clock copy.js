function clock() {
  for (let i = 0; i < 24; i++) {
    for (let m = 0; m < 60; m++) {
      console.log(`${i}:${m}`);
    }
  }
}
clock();
