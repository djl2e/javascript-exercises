const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(ls) {
	sumResult = 0;
  for (const l of ls) {
    sumResult += l;
  }
  return sumResult;
};

const multiply = function(ls) {
  product = 1;
  for (const l of ls) {
    product *= l;
  }
  return product
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	product = 1;
  for (let i = a; i > 1; i--) {
    product *= i;
  }
  return product;
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
