class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    }
    this.spaceAvailable -= spaceRequired;
    this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
    return `The ${plantName} has been successfully planted in the garden.`;
  }
  ripenPlant(plantName, quantity) {
    let plant = this.plants.find((x) => x.plantName == plantName);
    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (plant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }
    if (quantity > 1) {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
    plant.ripe = true;
    plant.quantity += quantity;

    return `${quantity} ${plantName} has successfully ripened.`;
  }
  harvestPlant(plantName) {
    let plant = this.plants.find((x) => x.plantName == plantName);

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (!plant.ripe) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }
    let plantIndex = this.plants.indexOf(plant);
    this.storage.push(`${plant.plantName} ${plant.quantity}`);
    this.plants.splice(plantIndex, 1);
    this.spaceAvailable += plant.spaceRequired;
    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let generatedReport = [];
    let plantsSorted = [];
    let sorted = this.plants.sort((a, b) =>
      a.plantName.localeCompare(b.plantName)
    );
    generatedReport.push(
      `The garden has ${this.spaceAvailable} free space left.`
    );
    sorted.forEach((x) => plantsSorted.push(x.plantName));
    generatedReport.push(`Plants in the garden: ${plantsSorted.join(", ")}`);
    if (this.storage.length == 0) {
      generatedReport.push("Plants in storage: The storage is empty.");
    } else {
      generatedReport.push(`Plants in storage: ${this.storage.join(", ")}`);
    }
    return generatedReport.join("\n");
  }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
