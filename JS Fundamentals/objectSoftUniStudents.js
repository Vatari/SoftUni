function softUniStudents(arr) {
  let disciplines = {};

  for (let el of arr) {
    if (!el.includes(`[`)) {
      let [course, capacity] = el.split(`: `);
      if (!disciplines.hasOwnProperty(course)) {
        disciplines[course] = {
          capacity: Number(capacity),
          students: [],
        };
      } else {
        disciplines[course].capacity += Number(capacity);
      }
    } else if (el.includes(`with email`)) {
      el = el.split(`[`);
      let user = el.shift();
      el = el[0].split(`]`);
      let credits = Number(el.shift());
      let temp = el[0].split(` `);
      let mail = temp[3];
      let course = el[0].split(` joins `)[1];
      if (
        disciplines.hasOwnProperty(course) &&
        disciplines[course].capacity > 0
      ) {
        disciplines[course].students.push({
          user,
          credits,
          mail,
        });
        disciplines[course].capacity--;
      }
    }
  }
  let sorted = Object.entries(disciplines).sort(
    (a, b) =>
      Object.keys(b[1].students).length - Object.keys(a[1].students).length
  );
  for (let el of sorted) {
    console.log(`${el[0]}: ${el[1].capacity} places left`);
    el[1].students
      .sort((a, b) => b.credits - a.credits)
      .forEach((x) => console.log(`--- ${x.credits}: ${x.user}, ${x.mail}`));
  }
}

softUniStudents([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);
