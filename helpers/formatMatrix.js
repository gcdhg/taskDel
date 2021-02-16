/**
 * takes array and forms strategy - new array with objects
 * which explains where data must be changed where
 * num - value that was repeating
 * lenght - amount of times that it repeated
 * index - index of first repeated element
 *
 * @param {Array} row
 */

const rowformat = (row) => {
  const arr = [];
  let i = 0;
  for (let index = 0; index < row.length; index++) {
    if (!arr[i]) {
      arr[i] = {
        num: row[index],
        length: 0,
        index: index,
      };
    }
    const isSame = arr[i].num === row[index];
    arr[i].length = isSame ? arr[i].length + 1 : arr[i].length;
    i = isSame ? i : i + 1;
  }
  return arr.filter((iteam) => iteam.length >= 3);
};

/**
 * transpose array making
 *
 * 1, 1, 3  to  1, 1, 2, 4
 * 1, 2, 4      1, 2, 4, 2
 * 2, 4, 2      3, 4, 2, 3
 * 4, 2, 3
 *
 * @param {Array} arr
 */

const transpose = (arr) =>
  arr[0].map((_, index) => arr.map((row) => row[index]));
// alternative with for loop
// for (let i = 0; i < rawArray[0].length; i++) {
//   columns.push([]);
// }
// for (let i = 0; i < columns.length; i++) {
//   for (let j = 0; j < rawArray.length; j++) {
//     columns[i] = [...columns[i], rawArray[j][i]];
//   }
// }

/**
 * replaces all data accordign strategy
 *
 * @param {Array} row
 * @param {Array} strategy
 */

const replace = (row, strategy) => {
  return row.map((row, index) => {
    if (strategy[index].length) {
      strategy[index].forEach((zeros) => {
        const start = zeros.index;
        const end = start + zeros.length;
        row.fill(0, start, end);
        // for (let i = start; i < end; i++) {
        //   row[i] = 0;
        // }
      });
    }
    return row;
  });
};

/**
 * replaces every number that repeats more that 3 times in a row or in a column
 * returns new array
 *
 * @param {Array} matrix
 */

const formatMatrix = (matrix) => {
  /**
   * clone array
   */
  let rawArray = matrix.map((i) => i.slice(0));
  /**
   * get rows stratagy
   */
  const rows = rawArray.map((row) => rowformat(row));
  /**
   * transpose array
   */
  let columns = transpose(rawArray);
  /**
   * get columns strategy
   */
  const columnStratedy = columns.map((row) => rowformat(row));
  /**
   * replace data according to strat
   */
  columns = replace(columns, columnStratedy);
  /**
   * transpose array
   */
  rawArray = transpose(columns);
  /**
   * replace data according to strat
   */
  rawArray = replace(rawArray, rows);

  return rawArray;
};

module.exports = {
  formatMatrix,
};
