const { address } = require("../helpers/zeroMatrixAddress");

const matrix = [
  [0, 0, 0, 2, 3],
  [3, 1, 0, 2, 1],
  [1, 2, 0, 3, 4],
  [0, 0, 0, 2, 3],
  [3, 1, 4, 2, 0],
  [1, 3, 1, 3, 0],
  [1, 2, 1, 2, 0],
];
const expected = [
  [0, 0], [0, 1], [0, 2],
  [1, 2],
  [2, 2],
  [3, 0], [3, 1], [3, 2],
  [4, 4],
  [5, 4],
  [6, 4],
];

const res = address(matrix);

it('lets check length', () => {
  expect(res.length).toBe(expected.length);
})

res.forEach((response, index) => {
  const exp = expected[index].join(', ');
  const recived = response.join(', ');
  it(`expected: [${exp}] recived: [${recived}]`, () => {
    expect(exp).toBe(recived);
  })
});
