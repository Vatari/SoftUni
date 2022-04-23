function arrayManipulator(arr1, arr2) {
  let newArr = [];
  for (let el of arr2) {
    let [command, index, ...element] = el.split(" ");

    if (command === "add") {
      addElement(arr1, index, element);
    }
    if (command === "addMany") {
      addMany(arr1, index, ...element);
      newArr = []
    }
    if (command === "contains") {
      console.log(checkIfExist(arr1, +index));
    }
    if (command === "remove") {
      removeElement(arr1, index);
    }
    if (command === "shift") {
      shiftElements(arr1, index);
    }
    if (command === "sumPairs") {
      let sum = sumPairs(arr1);

      arr1 = sum;
    }
    if (command === "print") {
      newArr = arr1;

      console.log(`[ ${newArr.join(", ")} ]`);
      break;
    }
  }

  function checkIfExist(arr, element) {
    let index = arr.indexOf(element);

    return index;
  }

  function shiftElements(arr, position) {
    let shifted = arr.splice(0, position);
    return arr.push(shifted);
  }

  function removeElement(arr, index) {
    arr.splice(index, 1);
    return arr;
  }

  function addElement(arr, index, element) {
    arr.splice(index, 0, element);
    return arr;
  }
  function addMany(arr, index, ...element) {
    arr.splice(index, 0, ...element);
    return arr;
  }

  function sumPairs(arr) {
    arr.map(Number);
    let sumArr = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      let first = +arr[i];
      let second = +arr[i + 1];

      if (second === undefined && arr.length % 2 !== 0) {
        second = 0;
      }
      sum = first + second;
      i++;

      sumArr.push(sum);
    }

    return sumArr;
  }
}
arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);


/* function solve3(arr, commands) {
  let newArr = [];
  for (let el of commands) {
      let [command, index, element] = el.split(' ');
      switch (command) {
          case 'add':
              arr.splice(index, 0, +element);
              break;
          case 'addMany':
              let currentEl = 0;
              let removeFirst = el.split(' ');
              for (let i = removeFirst.length - 1; i >= 2; i--) {
                  currentEl = removeFirst[i];
                  arr.splice(index, 0, +currentEl);
              }
              break;
          case 'contains':
              // if (arr.indexOf(+index) !== -1) {
              //     console.log('0');
              // } else {
              //     console.log('-1');
              // }
              console.log(arr.indexOf(+index));
              break;
          case 'remove':
              arr.splice(index, 1);
              break;
          case 'shift':
              let position = +index;
              for (let i = 0; i < position; i++) {
                  let firstEl = arr.shift();
                  arr.push(firstEl);
              }
              break;
          case 'sumPairs':
              // if (arr.length % 2 === 0) {
                  let els = arr.reduce(function(total, el, index) {
                      if (index % 2 === 0) {
                          total.push(+arr[index] + (+arr[index + 1] || 0));
                      }
                      return total;
                  }, []);
                  arr = els;
              // }
              break;
          case 'print':
              for (let el of arr) {
                  newArr.push(el);
              }
              break;
      }
  }
  // console.log(newArr);
  console.log('[ ' + newArr.join(', ') + ' ]');
} */