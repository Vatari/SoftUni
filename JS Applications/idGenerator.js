function generateId() {
  return "xxxxxxxxxxxxxxxxxxxxxxxx".replace(/x/g, () =>
    ((Math.random() * 16) | 0).toString(16)
  );
}

console.log(generateId());