'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min() {

  let numbers = arguments[0] instanceof Array ? arguments[0] : arguments;
  let answer = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (answer > numbers[i]) {
      answer = numbers[i];
    }
  }
  return answer;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum() {
  let numbers = arguments[0] instanceof Array ? arguments[0] : arguments;
  let answer = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return answer;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
  return array;
};
// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// elements index as an argument

const newArray = function newArray(length, defaultValue) {
  for (var i = 0; i < array.length; i++) {
    array[i] = defaultValue(array[i])
  }
  return array;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {
  if (typeof propertyName[method] === 'undefined') {
    propertyName[method] = obj;
    return true;
  }
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
