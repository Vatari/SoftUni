function cats(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.Meow = () => {
        console.log(`${this.name}, age ${this.age} says Meow`);
      };
    }
  }

  let cats = [];
  for (let catStr of arr) {
    let tokens = catStr.split(" ");
    let cat = new Cat(tokens[0], tokens[1]);
    cats.push(cat);
  }

  for (let cat of cats) {
    cat.Meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
cats(["Candy 1", "Poppy 3", "Nyx 2"]);
