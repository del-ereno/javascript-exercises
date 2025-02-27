const convertToCelsius = function(fhVal) {
  return (Number(((fhVal - 32) * (5/9)).toFixed(1)));
};

const convertToFahrenheit = function(celVal) {
  return (Number((celVal * (9/5) + 32).toFixed(1)));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
