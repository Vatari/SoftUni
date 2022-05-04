function heartDelivery(arr) {
  let houses = arr.shift().split("@").map(Number);
  let cupidPosition = 0;

  while (arr[0] != "Love!") {
    let tokens = arr.shift().split(" ");
    let jump = Number(tokens[1]);

    cupidPosition += jump;

    if (cupidPosition >= houses.length) {
      cupidPosition = 0;
    }

    if (houses[cupidPosition] == 0) {
      console.log(`Place ${cupidPosition} already had Valentine's day.`);
    } else {
      houses[cupidPosition] -= 2;
      if (houses[cupidPosition] == 0) {
        console.log(`Place ${cupidPosition} has Valentine's day.`);
      }
    }
  }

  let missed = 0;
  for (let house of houses) {
    if (house > 0) {
      missed++;
    }
  }
  console.log(`Cupid's last position was ${cupidPosition}.`);
  if (missed > 0) {
    console.log(`Cupid has failed ${missed} places.`);
  } else {
    console.log("Mission was successful.");
  }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love! "]);
