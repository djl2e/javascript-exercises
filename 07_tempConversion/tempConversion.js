const ftoc = function(temp) {
  temp = (temp - 32) * 5 / 9;
  return roundToOneDecimal(temp);
};

const ctof = function(temp) {
  temp = temp * 9 / 5 + 32;
  return roundToOneDecimal(temp);
};

function roundToOneDecimal(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
