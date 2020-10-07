const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if (!typeof position === 'number' || position >= this.chain.length || position < 0){
      this.chain = [];
      throw new Error();
    }
    this.chain = this.chain.filter((el, index) => index != position - 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let finalChain = this.chain.join('');
    this.chain = [];
    finalChain = finalChain.split('').slice(0, finalChain.length - 2).join('');
    return finalChain;
  }
};

module.exports = chainMaker;