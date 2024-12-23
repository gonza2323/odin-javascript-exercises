const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((acc, x) => acc + x, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((acc, x) => acc * x, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  result = 1;
  i = 0;
  while (i < n) {
    result *= (i + 1);
    i++;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
