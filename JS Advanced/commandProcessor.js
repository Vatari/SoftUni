function solution() {
  let state = "";

  function append(str) {
    state += str;
  }
  function removeStart(x) {
    state = state.slice(x);
  }
  function removeEnd(x) {
    state = state.slice(0, -x);
  }
  function print() {
    console.log(state);
  }

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };
}
solution();

const firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
