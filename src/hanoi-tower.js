const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) -1;
  const seconds = (turns/turnsSpeed) * 3600;
  return ({turns:turns, seconds:Math.floor(seconds)});
};
