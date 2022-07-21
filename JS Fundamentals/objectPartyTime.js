function partyTime(arr) {
  let vipInvites = new Set();
  let regularInvites = new Set();

  while (arr[0] != "PARTY") {
    let guest = arr.shift();
    if (!Number.isNaN(Number(guest[0]))) {
      vipInvites.add(guest);
    } else {
      regularInvites.add(guest);
    }
  }
  for (let guest of arr) {
    vipInvites.delete(guest);
    regularInvites.delete(guest);
  }
  console.log(vipInvites.size + regularInvites.size);
  for (let guest of vipInvites) {
    console.log(guest);
  }
  for (let guest of regularInvites) {
    console.log(guest);
  }
}
partyTime([
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
