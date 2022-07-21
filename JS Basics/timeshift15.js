function timeshift(input) {
  let hour = Number(input[0]);
  let mins = Number(input[1]) + 15;

  if (mins > 59) {
    hour = hour + 1;
    mins = mins - 60;
  }

  if (hour > 23) {
    hour = hour - 24;
  }
  if (mins < 10) {
    console.log(`${hour}:0${mins}`);
  } else {
  console.log(`${hour}:${mins}`);
}
}

timeshift(["0", "01"]);
