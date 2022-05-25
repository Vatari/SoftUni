function spiceMustFlow(mineYield) {
  let totalextracted = 0;
  let daysCount = 0;

  while (mineYield >= 100) {
    daysCount++;
    totalextracted += mineYield - 26;
    mineYield -= 10;

    if (mineYield < 26) {
      break;
    }

    if (mineYield < 100) {
      totalextracted -= 26;
    }
  }
  console.log(daysCount);
  console.log(totalextracted);
}
spiceMustFlow(111);
spiceMustFlow(450);
