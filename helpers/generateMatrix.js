/**
 * generates random integer number betwen min and max values
 *
 * @param {Number} min
 * @param {Number} max
 */

const generateMatrix = (NQuery, MQuery) => {
  const randomise = (min, max) =>
    min + Math.floor(Math.random() * Math.floor(max));
  /**
   * get query params
   */
  const N = parseInt(NQuery, 10);
  const M = parseInt(MQuery, 10);
  /**
   * generate matrix
   */
  let rawMatrix = new Array(M).fill([]);
  rawMatrix = rawMatrix.map((row) => new Array(N).fill(1));
  /**
   * randomise data
   */
  rawMatrix = rawMatrix.map((row) => row.map((iteam) => randomise(1, 4)));
  return rawMatrix;
};

module.exports = {
  generateMatrix,
};
