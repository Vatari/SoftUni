function radar(speed, area) {
    let motorWayLimit = 130;
    let cityLimit = 50;
    let residentialLimit = 20;
    let interstateLimit = 90;
    let difference = 0;
    let status = "";
    switch (area) {
      case "city":
        if (speed <= cityLimit) {
          console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
        } else {
          difference = speed - cityLimit;
          if (difference <= 20) {
            status = "speeding";
          } else if (difference > 20 && difference <= 40) {
            status = "excessive speeding";
          } else {
            status = "reckless driving";
          }
          console.log(
            `The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`
          );
        }
        break;
      case "interstate":
        if (speed <= interstateLimit) {
          console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
        } else {
          difference = speed - interstateLimit;
          if (difference <= 20) {
            status = "speeding";
          } else if (difference > 20 && difference <= 40) {
            status = "excessive speeding";
          } else {
            status = "reckless driving";
          }
          console.log(
            `The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`
          );
        }
        break;
      case "motorway":
        if (speed <= motorWayLimit) {
          console.log(`Driving ${speed} km/h in a ${motorWayLimit} zone`);
        } else {
          difference = speed - motorWayLimit;
          if (difference <= 20) {
            status = "speeding";
          } else if (difference > 20 && difference <= 40) {
            status = "excessive speeding";
          } else {
            status = "reckless driving";
          }
          console.log(
            `The speed is ${difference} km/h faster than the allowed speed of ${motorWayLimit} - ${status}`
          );
        }
        break;
      case "residential":
        if (speed <= residentialLimit) {
          console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
        } else {
          difference = speed - residentialLimit;
          if (difference <= 20) {
            status = "speeding";
          } else if (difference > 20 && difference <= 40) {
            status = "excessive speeding";
          } else {
            status = "reckless driving";
          }
          console.log(
            `The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`
          );
        }
        break;
    }
  }
radar(40, 'city')