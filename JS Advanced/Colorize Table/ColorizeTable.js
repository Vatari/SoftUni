function colorize() {
  let names = Array.from(document.querySelectorAll("tr", "td"));
  names.forEach((x, i) => {
    i % 2 != 0
      ? (x.style.backgroundColor = "teal")
      : (x.style.background = "trans");
  });
}
