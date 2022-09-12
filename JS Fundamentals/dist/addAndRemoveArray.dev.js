"use strict";

function addAndRemoveArray(input) {
  var newArr = [];
  var num = 0;
  /* 
  for (let i = 0; i < input.length; i++) {
    let command = input[i];
      num++;
    if (command === "add") {
      newArr.push(num);
    } else if (command === "remove") {
      newArr.pop(command);
    }
  }
  if (newArr.length === 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join(" "));
  } */

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      el = _step.value;
      num++;

      if (el === "add") {
        newArr.push(num);
      } else {
        newArr.pop(el);
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

  if (newArr.length === 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join(" "));
  }
}

addAndRemoveArray(["add", "add", "add", "add"]);
addAndRemoveArray(["add", "add", "remove", "add", "add", "remove"]);