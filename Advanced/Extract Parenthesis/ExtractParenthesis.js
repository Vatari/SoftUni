function extract(content) {
  let text = document.getElementById(content).textContent;
  let pattern = /\((.+?)\)/g;
  let result = "; ";

  let match = pattern.exec(text);
  while (match) {
    result += match[1] + "; ";
    match = pattern.exec(text);
  }
  return result;
}
