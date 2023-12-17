const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  value: [],

  addLink(value) {
    this.value.push(value);
    return this;
  },

  removeLink(position) {
    if (position < 1 || position > this.value.length || !Number.isInteger(position)) {
      this.value = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.value.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.value.reverse();
    return this;
  },

  finishChain() {
    const result = this.value.map((link) => `( ${link} )`).join('~~');
    this.value = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
