const express = require("express");
const router = express.Router();

const { generateMatrix } = require("../helpers/generateMatrix");
const { formatMatrix } = require("../helpers/formatMatrix");
const { address } = require("../helpers/zeroMatrixAddress");
const { saveDataTofile } = require("../helpers/saveDataTofile");

/* GET home page. */
router.get("/matrix", async function (req, res, _next) {
  /**
   * generate matrix with width and height
   */
  let rawMatrix = generateMatrix(req.query.N, req.query.M);
  /**
   * replaces every number that repeats more that 3 times in a row or in a column
   */
  let matrix = formatMatrix([...rawMatrix]);

  /**
   * get all zero addreses in new array
   */
  matrix = address(matrix);

  /**
   * format response
   * input - generated matrix set lengths by query params with random numbers from 1 to 4
   * output - zero addreses in new array that we get after all formatting
   */

  const response = {
    input: rawMatrix,
    output: matrix,
  };

  await saveDataTofile(JSON.stringify(response, null));

  res.status(200).json(response);
});

module.exports = router;
