/**
 * get array with all coordinates of all zeros in matrix
 */
const address = (array) => {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === 0) {
        res.push([i, j]);
      }
    }
  }
  return res;
};

module.exports = {
  address,
};
