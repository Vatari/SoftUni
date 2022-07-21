class Company {
  constructor() {
    this.departments = new Map();
  }
  addEmployee(username, salary, position, department) {
    if (!username || !salary || salary < 0 || !position || !department) {
      throw new Error("Invalid input!");
    }

    let newEmployee = { username, salary, position, department };

    if (this.departments.has(department)) {
      this.departments.get(department).push(newEmployee);
    } else {
      this.departments.set(department, [newEmployee]);
    }

    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }

  bestDepartment() {
    let salaryTotal = (department) => {
      let salaryTotal = department[1].reduce((acc, b) => {
        return (acc += b.salary);
      }, 0);
      let salaryAvg = (salaryTotal / department[1].length).toFixed(2);
      department.push(salaryAvg);
      return salaryAvg;
    };
    let best = [...this.departments].sort(
      (a, b) => salaryTotal(b) - salaryTotal(a)
    )[0];
    let salaryNameSort = best[1].sort(
      (a, b) => b.salary - a.salary || a.username.localeCompare(b.username)
    );

    let result = `Best Department is: ${best.shift()}\n`;
    result += `Average salary: ${best.pop()}\n`;
    salaryNameSort.forEach(
      (e) => (result += `${e.username} ${e.salary} ${e.position}\n`)
    );

    return result.trim();
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
