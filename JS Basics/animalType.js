function animalType(input) {
  let typeAnimal = input[0];

  if (typeAnimal === "dog") {
    console.log("mammal");
  } else if (
    typeAnimal === "snake" ||
    typeAnimal === "tortoise" ||
    typeAnimal === "crocodile"
  ) {
    console.log("reptile");
  } else {
    console.log("unknown");
  }
}
animalType(["snake"]);
animalType(["rabbit"]);

