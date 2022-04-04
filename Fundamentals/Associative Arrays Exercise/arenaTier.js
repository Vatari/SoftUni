function solve(arr) {
  let gladiators = {};

  while (arr[0] != "Ave Cesar") {
    let [name, skill, skillPoints] = arr.shift().split(" -> ");
    skillPoints = +skillPoints;

    
    
    if (!gladiators[name]) {

      gladiators[name] = [skill, skillPoints]
      console.log(gladiators[name][skill]);
      if (gladiators[name][skill] < skillPoints) {
        console.log('sdsdasd');
           gladiators[name].push(skill, skillPoints)
           gladiators[name][skill] = skillPoints
         }
         } 
         
         
         
         


    
    
   /*  if (gladiators[name][0].includes(skill)) {
        if (gladiators[name][1] < skillPoints) {
            gladiators[name][1] = skillPoints;
            
        }
    } */


    //  if (gladiators[name].)
  }
console.log(gladiators);
}
solve([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 2223423423400",
  "Stefan -> Tiger -> 11250",
  "Stefan -> Tiger -> 1111250",

  "Ave Cesar",
]);
