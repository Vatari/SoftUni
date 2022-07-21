function generateReport() {
  let checkedList = Array.from(document.getElementsByTagName("input"));

  let finalResult = [];
  let rowData = Array.from(document.getElementsByTagName("tr"));
  const checked = [];

  for (let i = 0; i < rowData.length; i++) {
    let row = rowData[i];
    let result = {};

    for (let y = 0; y < row.children.length; y++) {
      let element = row.children[y];
      if (i == 0) {
        if (element.children[0].checked) {
          checked.push(y);
        }
        continue;
      }

      if (checked.includes(y)) {
        let prop = checkedList[y].name;
        result[prop] = element.textContent;
      }
    }
    if (i !== 0) {
      finalResult.push(result);
    }
  }

  document.getElementById("output").value = JSON.stringify(finalResult);
}
