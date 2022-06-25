class Person {
  constructor(fName, lName, age, email) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.email = email;
  }
  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}
