function solve(area, vol, input) {
  let elements = JSON.parse(input);
  /*   for (el of elements) {
    let obj = {
      area: area.call(el),
      volume: vol.call(el),
    };
    result.push(obj);
  } */

  return elements.map((x) => {
    return {
      area: area.call(x),
      volume: vol.call(x),
    };
  });
}
solve(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function area() {
  return Math.abs(this.x * this.y);
}
