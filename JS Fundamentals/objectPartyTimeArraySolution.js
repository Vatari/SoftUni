function partyTimeArray(arr) {
  let vipGuests = [];
  let regularGuests = [];
  let invitation = arr.shift();
  while (invitation !== "PARTY") {
    if (/^\d+/.test(invitation)) {
      vipGuests.push(invitation);
    } else {
      regularGuests.push(invitation);
    }
    invitation = arr.shift();
  }
  for (let guest of arr) {
    if (vipGuests.indexOf(guest) >= 0) {
      vipGuests.splice(vipGuests.indexOf(guest), 1);
    }
    if (regularGuests.indexOf(guest) >= 0) {
      regularGuests.splice(regularGuests.indexOf(guest), 1);
    }
  }
  console.log(vipGuests.length + regularGuests.length);
  vipGuests.forEach((el) => console.log(el));
  regularGuests.forEach((el) => console.log(el));
}
partyTimeArray([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
