function softUniReception(arr) {
  arr = arr.map(Number);

  let emplEff1 = arr[0];
  let emplEff2 = arr[1];
  let emplEff3 = arr[2];
  let students = arr[3];

  let totalEfficiency = emplEff1 + emplEff2 + emplEff3;
  let time = 0;

  while (students > 0) {
    time++;
    if (time % 4 != 0) {
      students -= totalEfficiency;
    }
  }
  console.log(`Time needed: ${time}h.`);
}
softUniReception(["1", "2", "3", "45"]);
