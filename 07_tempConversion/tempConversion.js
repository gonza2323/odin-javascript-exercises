const convertToCelsius = function(F) {
  return Number.parseFloat(((F - 32) * 100/180).toFixed(1));
};

const convertToFahrenheit = function(C) {
  return Number.parseFloat((C * 180/100 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
