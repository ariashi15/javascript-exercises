const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
  let res = 0;
	arr.forEach(element => {
    res += element;
  });

  return res;
};

const multiply = function(arr) {
  let res = 1;
  arr.forEach(element => {
    res *= element;
  })
  return res;
};

const power = function(n1, n2) {
  let res = 1;
	for (let i = 0; i < n2; i++) {
    res *= n1;
  }
  
  return res;
};

const factorial = function(n) {
	let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }

  return res;
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
