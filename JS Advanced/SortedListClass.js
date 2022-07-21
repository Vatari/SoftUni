class List {
  constructor() {
    this.list = [];
    this.size = this.list.length;
  }

  newSize = () => (this.size = this.list.length);
  sortList = () => this.list.sort((a, b) => a - b);

  add(el) {
    this.list.push(el);
    this.newSize();
    this.sortList();
  }
  remove(index) {
    if (this.list[index] !== undefined) {
      this.list.splice(index, 1);
      this.newSize();
      this.sortList();
    }
  }
  get(index) {
    if (this.list[index] !== undefined) {
      this.newSize();
      this.sortList();
      return this.list[index];
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
