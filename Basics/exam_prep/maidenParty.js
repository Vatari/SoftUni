function maidenParty(input) {
  let maidenPartyPrice = Number(input[0]);
  let loveMessagesCount = Number(input[1]);
  let waxRosesCount = Number(input[2]);
  let keyholdersCount = Number(input[3]);
  let cartoonCount = Number(input[4]);
  let luckySuprisesCount = Number(input[5]);

  let totalStockCount =
    loveMessagesCount +
    waxRosesCount +
    keyholdersCount +
    cartoonCount +
    luckySuprisesCount;
  let priceLoveMessages = loveMessagesCount * 0.6;
  let priceRoses = waxRosesCount * 7.2;
  let priceKeyholders = keyholdersCount * 3.6;
  let priceCartoons = cartoonCount * 18.2;
  let priceLuckySuprises = luckySuprisesCount * 22;

  let totalPrice =
    priceLoveMessages +
    priceRoses +
    priceKeyholders +
    priceCartoons +
    priceLuckySuprises;

  if (totalStockCount > 25) {
    totalPrice *= 0.65;
  }
  totalPrice *= 0.9;
  if (totalPrice >= maidenPartyPrice) {
    console.log(`Yes! ${(totalPrice - maidenPartyPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(maidenPartyPrice - totalPrice).toFixed(
        2
      )} lv needed.`
    );
  }
}
maidenParty(["320", "8", "2", "5", "5", "1"]);
