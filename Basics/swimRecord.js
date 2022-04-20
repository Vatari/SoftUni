function swimRecord(input) {
  let record = Number(input[0]);
  let distance = Number(input[1]);
  let timeForMeter = Number(input[2]);

  let totalSeconds = distance * timeForMeter;

  let delay = Math.floor(distance / 15) * 12.5;
  let finalSeconds = totalSeconds + delay;

  if (finalSeconds < record) {
    console.log(
      `Yes, he succeeded! The new world record is ${finalSeconds.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${(finalSeconds - record).toFixed(
        2
      )} seconds slower.`
    );
  }
}
swimRecord(["10464", "1500", "20"]);
