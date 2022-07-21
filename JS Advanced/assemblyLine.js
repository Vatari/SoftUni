function solve() {
  let car = {
    hasClima: function (obj) {
      (obj.temp = 21),
        (obj.tempSettings = 21),
        (obj.adjustTemp = function () {
          if (this.temp < this.tempSettings) {
            this.temp += 1;
          } else if (this.temp > this.tempSettings) {
            this.temp -= 1;
          }
        });
    },
    hasAudio: function (obj) {
      obj.currentTrack = {
        name: null,
        artist: null,
      };
      obj.nowPlaying = function () {
        console.log(
          `Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`
        );
      };
    },
    hasParktronic: function (obj) {
      obj.checkDistance = function (distance) {
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (distance <= 0.1 && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (distance <= 0.25 && distance < 0.5) {
          console.log("Beep!");
        }
      };
    },
  };

  return car;
}
solve();

const assemblyLine = solve();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
  name: "Never Gonna Give You Up",
  artist: "Rick Astley",
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
