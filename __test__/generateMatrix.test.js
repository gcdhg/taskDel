const { generateMatrix } = require("../helpers/generateMatrix");

it("check that function generates valid data", () => {
  let N = "4";
  let M = "7";
  const arr = generateMatrix(N, M);
  expect(arr).toHaveLength(parseInt(M, 10));
  arr.forEach((element) => {
    expect(element).toHaveLength(parseInt(N, 10));
    const isValid = element.some((item) => item > 4);
    expect(isValid).toBeFalsy();
  });
});
