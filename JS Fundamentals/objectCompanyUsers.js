function companyUsers(arr) {
  let companyInfo = {};

  for (el of arr) {
    let [companyName, userId] = el.split(" -> ");

    if (!companyInfo.hasOwnProperty(companyName)) {
      companyInfo[companyName] = new Set();
    }
    companyInfo[companyName].add(userId);
  }
  let sorted = Object.entries(companyInfo).sort();
  for (let [company, userId] of sorted) {
    console.log(company);
    for (let user of userId) {
      console.log(`-- ${user}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);

// MAP SOLUTION !
/* function companyUsers(arr) {
  let companyInfo = new Map();

  for (el of arr) {
    let [companyName, userId] = el.split(" -> ");

    if (!companyInfo.has(companyName)) {
      companyInfo.set(companyName, new Set());
    }

    companyInfo.get(companyName).add(userId);
  }
  let sorted = Array.from(companyInfo).sort();
  for (let [company, userId] of sorted) {
    console.log(company);
    for (let user of userId) {
      console.log(`-- ${user}`);
    }
  }
} */
