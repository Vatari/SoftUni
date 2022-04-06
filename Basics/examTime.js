function examTime(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arriveHour = Number(input[2]);
  let arriveMinute = Number(input[3]);

  let TotalMinutes = examHour * 60 + examMinute;
  let arriveTotalMinutes = arriveHour * 60 + arriveMinute;

  if (arriveTotalMinutes > TotalMinutes) {
    console.log("Late");
  } else if (TotalMinutes - arriveTotalMinutes <= 30) {
    console.log("On time");
  } else {
    console.log("Early");
  }

  let result = Math.abs(TotalMinutes - arriveTotalMinutes);
  if (TotalMinutes - arriveTotalMinutes > 0) {
    if (result < 60) {
      console.log(`${result} minutes before the start`);
    } else {
      if (result % 60 < 10) {
        console.log(
          `${Math.trunc(result / 60)}:0${result % 60} hours before the start`
        );
      } else {
        console.log(
          `${Math.trunc(result / 60)}:${result % 60} hours before the start`
        );
      }
    }
  } else if (arriveTotalMinutes - TotalMinutes > 0) {
    if (result < 60) {
      console.log(`${result} minutes after the start`);
    } else {
      if (result % 60 < 10) {
        console.log(
          `${Math.trunc(result / 60)}:0${result % 60} hours after the start`
        );
      } else {
        console.log(
          `${Math.trunc(result / 60)}:${result % 60} hours after the start`
        );
      }
    }
  }
}
examTime(["9", "30", "9", "50"]);
