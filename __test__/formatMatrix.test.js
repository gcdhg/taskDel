const { formatMatrix } = require("../helpers/formatMatrix");

const matrix = [
  [
    [1, 1, 1, 2, 3],
    [3, 1, 1, 2, 1],
    [1, 2, 1, 3, 4],
    [1, 1, 1, 2, 3],
    [3, 1, 4, 2, 4],
    [1, 3, 1, 3, 4],
    [1, 2, 1, 2, 4],
  ],
  [
    [1, 3, 2, 4],
    [3, 3, 3, 1],
    [1, 3, 2, 4],
  ],
];
const expected = [
  [
    [0, 0, 0, 2, 3],
    [3, 1, 0, 2, 1],
    [1, 2, 0, 3, 4],
    [0, 0, 0, 2, 3],
    [3, 1, 4, 2, 0],
    [1, 3, 1, 3, 0],
    [1, 2, 1, 2, 0],
  ],
  [
    [1, 0, 2, 4],
    [0, 0, 0, 1],
    [1, 0, 2, 4],
  ],
];

matrix.forEach((mat, index) => {
  const res = formatMatrix(mat);
  res.forEach((row, i) => {
    const result = row.join(", ");
    const exp = expected[index][i].join(", ");
    it(`result: [${result}] should be: [${exp}]`, () => {
      expect(row.join(" ")).toBe(expected[index][i].join(" "));
    });
  });
});
