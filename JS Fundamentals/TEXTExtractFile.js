function extractFile(text) {
  let file = text.split("\\").pop();
  let fileName = file.substring(0, file.lastIndexOf("."));
  let extension = file.substring(file.lastIndexOf(".") + 1);
  console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}

extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
