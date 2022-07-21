class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }
  addGoal(peak, altitude) {
    if (this.goals[peak]) {
      return `${peak} has already been added to your goals`;
    }
    this.goals[peak] = altitude;
    return `You have successfully added a new goal - ${peak}`;
  }
  hike(peak, time, difficultyLevel) {
    time = Number(time);

    if (!this.goals[peak]) {
      throw new Error(`${peak} is not in your current goals`);
    }

    if (this.goals[peak] && this.resources == 0) {
      throw new Error("You don't have enough resources to start the hike");
    }
    this.resources -= time * 10;

    if (this.resources < 0) {
      return "You don't have enough resources to complete the hike";
    }
    this.listOfHikes.push({
      peak,
      time,
      difficultyLevel,
      resources: this.resources,
    });

    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    time = Number(time);
    this.resources += time * 10;
    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    }
    return `You have rested for ${time} hours and gained ${
      time * 10
    }% resources`;
  }
  showRecord(criteria) {
    if (this.listOfHikes.length == 0) {
      return `${this.username} has not done any hiking yet`;
    }

    if (criteria == "hard") {
      let hardHikes = this.listOfHikes.filter(
        (x) => x.difficultyLevel == "hard"
      );
      if (hardHikes.length == 0) {
        return `${this.username} has not done any hard hiking yet`;
      }
      let best = hardHikes.sort((a, b) => b.time - a.time)[0];
      return `${this.username}'s best hard hike is ${best.peak} peak, for ${best.time} hours`;
    }
    if (criteria == "easy") {
      let easyHikes = this.listOfHikes.filter(
        (x) => x.difficultyLevel == "easy"
      );
      if (easyHikes.length === 0) {
        return `${this.username} has not done any easy hiking yet`;
      }
      let best = easyHikes.sort((a, b) => b.time - a.time)[0];
      return `${this.username}'s best easy hike is ${best.peak} peak, for ${best.time} hours`;
    }

    if (criteria == "all") {
      let allHikes = this.listOfHikes.sort((a, b) => b.time - a.time);
      return (
        `All hiking records:\n` +
        allHikes
          .map((x) => `${this.username} hiked ${x.peak} for ${x.time} hours`)
          .find((x) => x)
      );
    }
  }
}

const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
