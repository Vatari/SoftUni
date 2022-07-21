function employees(arr) {
  class Employee {
    constructor(name, number) {
      this.name = name;
      this.personalNumber = number;
    }
  }

  for (let el of arr) {
    let name = el.split(",");
    let personalNumber = el.length;
    let employee = new Employee(name, personalNumber);
    console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
