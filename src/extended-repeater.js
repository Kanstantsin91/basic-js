const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|'} = options;
  if(typeof str != 'string'){
  	str = String(str);
  }
  
  if(typeof addition != 'string') {
  	addition = String(addition);
  }
  
  if(!repeatTimes){
  	return str;
  }
  let fullStr = str;
  let fullAddition = '';
  let returnedStr = '';
  if (addition !== 'undefined'){
  for(let i = 0; i < ((additionRepeatTimes*2) - 1); i++){
  		if( i % 2 === 0 ){
      	fullAddition += addition;
      } else fullAddition += additionSeparator;
  	}
    fullStr += fullAddition;
  }
  for(let i = 0; i < ((repeatTimes*2) - 1); i++){
  		if( i % 2 === 0){
      	returnedStr += fullStr;
      } else returnedStr += separator;
  	}
    
  return returnedStr;
};
  