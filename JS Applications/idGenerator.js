function generateId() {
  return "xxxxx-xxxx-xxxx-xxxx-xxxx-xxxx".replace(/x/g, () =>
    ((Math.random() * 16) | 0).toString(16)
  );
}

console.log(generateId());