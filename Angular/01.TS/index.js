"use strict";
exports.__esModule = true;
var employee_1 = require("./employee");
var junior = new employee_1.Junior("Gosho", 20);
junior.work();
var senior = new employee_1.Senior("Ivaylo", 30);
senior.work();
senior.work();
senior.work();
var manager = new employee_1.Manager("Milen", 40);
manager.work();
manager.work();
manager.work();
