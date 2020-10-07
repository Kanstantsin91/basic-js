const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    arr.forEach((el) => {
      let currentDepth = 1;
      if (Array.isArray(el)) {
        currentDepth += this.calculateDepth(el);
      }
      if (depth < currentDepth) {
        depth = currentDepth;
      }
    });
    return depth;
  };
}