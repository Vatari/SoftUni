function solve() {
  let result = (() => {
    let list = [];

    let add = function (element) {
      list.push(element);
      list.sort((a, b) => a - b);
      this.size++;
      return list;
    };

    let remove = function (index) {
      if (index >= 0 && index < list.length) {
        list.splice(index, 1);
        list.sort((a, b) => a - b);
        this.size--;
        return list;
      }
    };

    let get = function (index) {
      if (index >= 0 && index < list.length) {
        let item = list[index];
        return item;
      }
    };

    let size = 0;
    return { add, remove, get, size };
  })();

  return result;
}
