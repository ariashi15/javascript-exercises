const convertToCelsius = function(f) {
  let res = (f - 32) * 5/9;
  return parseFloat(res.toFixed(1));
};

const convertToFahrenheit = function(c) {
  let res = c * (9/5) + 32;
  return parseFloat(res.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
