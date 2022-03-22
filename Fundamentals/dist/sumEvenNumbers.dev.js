"use strict";

function solve(arr) {
  // Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.
  var sumEven = 0;
  var numbers = arr.map(Number);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      number = _step.value;

      if (number % 2 == 0) {
        sumEven += number;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(sumEven);
}

solve(["1", "2", "3", "4", "5", "6"]);