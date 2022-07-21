function solve(width, height, color) {
  let cased = capitalize(color);
  let rectangle = {
    calcArea: function () {
      return this.width * this.height;
    },
  };

  rectangle.width = width;
  rectangle.height = height;
  rectangle.color = cased;

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return rectangle;
}

let rect = solve(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
