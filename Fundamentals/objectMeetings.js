function meetings(arr) {
  let meetings = {};

  for (let el of arr) {
    let [day, name] = el.split(" ");
    if (meetings.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }
  for (let el in meetings) {
    console.log(el, "->", meetings[el]);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
