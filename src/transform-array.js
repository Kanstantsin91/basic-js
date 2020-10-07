const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Error');
  let transformedArr = [...arr];
  transformedArr.forEach( (el, index)=>{
  switch (el) {
  	case '--discard-next':
    	transformedArr[index+1] = undefined;
      transformedArr[index] = undefined;
      break;
    case '--discard-prev':
    	transformedArr[index-1]  = undefined;
      transformedArr[index] = undefined;
      break;
    case '--double-next':
			transformedArr = [...transformedArr.slice(0, index), transformedArr[index+1], ...transformedArr.slice(index+1)];   
      break;
    case '--double-prev':
    	transformedArr = [...transformedArr.slice(0, index), transformedArr[index-1], ...transformedArr.slice(index+1)];
  }
  });
  return transformedArr.filter((el)=> el != undefined);
};
