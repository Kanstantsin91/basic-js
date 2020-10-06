const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  let strArr = members.filter((item) => typeof item === 'string').map((item) => item.trim());
  dreamTeamName = '';
  strArr.forEach((item)=> {
    dreamTeamName += item.split('')[0].toUpperCase();
  });
  return dreamTeamName.split('').sort().join('');
};
