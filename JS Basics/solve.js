function solve(min, max) { 
  min = Math.ceil(min);
  max = Math.floor(max);
  str = ""
  result = 0
  for (let i =1; i <= 6; i++){
  result=(Math.floor(Math.random() * (max - min + 1)) + min)
  str += `${result} `

}
console.log(str); 
}
solve (1,49)