const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let copiedArray = matrix.map((arr) => arr.slice().fill(0));

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x]) {
        // here is bomb
        increaseCellsAroundBomb({x, y}, copiedArray);
      }

    }
  }
  return copiedArray;
}

function increaseCellsAroundBomb(bombCoordinate = {x: 0, y: 0}, copiedArray) {
  answer = [];
  sizeY = copiedArray.length;
  sizeX = copiedArray[0].length;

  for (let indexY = -1; indexY <= 1; indexY++) {
      for (let indexX = -1; indexX <= 1; indexX++) {

          if (indexX == 0 && indexY == 0) continue;

          answer.push({y: bombCoordinate.y + indexY, x: bombCoordinate.x + indexX} );
      }
  }

  const cordArray =  answer.filter(coordinate => coordinate.x >= 0 && coordinate.x <= sizeX - 1 && coordinate.y >= 0 && coordinate.y <= sizeY - 1);
  for (const cord of cordArray) {
    copiedArray[cord.y][cord.x]++;
  }
}

module.exports = {
  minesweeper
};
