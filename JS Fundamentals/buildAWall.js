function wallBuild(arr) {
  let parsedArr = arr.map(Number);
  let dailyConcrete = [];
  let totalConcrete = 0;
  let costs = 0;
  let crews = parsedArr.filter((len) => len < 30).length;

  while (crews !== 0) {
    let concreteByAllCrews = 0;
    for (let i = 0; i < parsedArr.length; i++) {
      if (parsedArr[i] !== 30) {
        parsedArr[i]++;
        concreteByAllCrews += 195;
        if (parsedArr[i] == 30) {
          crews--;
        }
      }
    }
    totalConcrete += concreteByAllCrews;
    dailyConcrete.push(concreteByAllCrews);
  }
  costs = totalConcrete * 1900;
  console.log(dailyConcrete.join(", "));
  console.log(`${costs} pesos`);
}
wallBuild([17, 22, 17, 19, 17]);
