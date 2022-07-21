function cooking(num, ...comms) {
    num = +num;
    for (el of comms) {
      if (el === "chop") {
        num = chop(num);
        console.log(num);
      } else if (el === "dice") {
        num = dice(num);
        console.log(num);
      } else if (el === "spice") {
        num = spice(num);
        console.log(num);
      } else if (el === "bake") {
        num = bake(num);
        console.log(num);
      } else if (el === "fillet") {
        num = fillet(num);
        console.log(num.toFixed(1));
      }
    }
  
    function chop(n) {
      return n / 2;
    }
    function dice(n) {
      return Math.sqrt(n);
    }
    function spice(n) {
      return n + 1;
    }
    function bake(n) {
      return n * 3;
    }
  
    function fillet(n) {
      return n * 0.8;
    }
  }
  cooking("9", "dice", "spice", "chop", "bake", "fillet");