const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  for (let index = 0; index < names.length; index++) {
    const element = names[index];
    const prevArray = names.slice(0, index);

    let findDuplicate = (array, nameElement) => array.find(item => item === nameElement) !== undefined;
    let createName = (element, counter) => counter === 0 ? element : `${element}(${counter})`;

    let counter = 0;
    let nameSearch = createName(element, counter);
    while (findDuplicate(prevArray, nameSearch)) {
      counter++;
      nameSearch = createName(element, counter);
    }
    names[index] = nameSearch;
  }

  return names;
}

module.exports = {
  renameFiles
};
