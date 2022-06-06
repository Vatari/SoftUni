function solve(arr) {
  let students = JSON.parse(arr);
  let html = ["<table>"];
  let studentNames = students[0];

  html.push(makeKeyRow(studentNames));
  students.forEach((obj) => html.push(makeValueRow(obj)));
  html.push("</table>");

  function makeKeyRow(arr) {
    let keys = [];
    Object.keys(arr).forEach((key) => {
      keys.push(`<th>${toHTML(key)}</th>`);
    });
    return "<tr>" + keys.join("") + "</tr>";
  }

  function makeValueRow(obj) {
    let rows = [];
    Object.values(obj).forEach((value) => {
      rows.push(`<td>${toHTML(value)}</td>`);
    });
    return "<tr>" + rows.join("") + "</tr>";
  }

  function toHTML(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  return html.join("\r\n");
}

solve(`[{"Name":"Stamat",
  "Score":5.5},
  {"Name":"Rumen",
  "Score":6}]`);
