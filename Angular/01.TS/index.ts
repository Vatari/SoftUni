import { Junior, Manager, Senior } from "./employee";

const junior = new Junior(`Gosho`, 20);

junior.work();

const senior = new Senior(`Ivaylo`, 30);

senior.work();
senior.work();

senior.work();

const manager = new Manager("Milen", 40);

manager.work();
manager.work();
manager.work();
