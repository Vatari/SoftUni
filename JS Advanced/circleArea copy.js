function solve(radius) {
  if (typeof radius === "number") {
    let area = radius * radius * Math.PI;
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof radius}.`
    );
  }
}
solve(5);
