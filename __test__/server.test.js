const fetch = require("node-fetch");
const { URL: Url } = require("url");
const { promises: fs } = require("fs");

const { formatMatrix } = require("../helpers/formatMatrix");
const { address } = require("../helpers/zeroMatrixAddress");

it("check that matrix is generated", async () => {
  // create base url
  const url = new Url("/matrix", "http://localhost:3000/");
  const N = 4;
  const M = 10;
  // set query params
  url.searchParams.set("N", N);
  url.searchParams.set("M", M);
  // make get request
  let res = await fetch(url);
  // parse data
  res = await res.json();
  // check length - we dont check it fully because we have another test for this
  expect(res.input.length).toBe(M);

  // check that addres was valid
  // because every function was tested and approved as valid
  // we will double check and result from fetch
  let checkMatrix = formatMatrix(res.input);
  checkMatrix = address(checkMatrix);

  // check strings
  expect(JSON.stringify(res.output)).toBe(JSON.stringify(checkMatrix));

  // check that data saved in file is valid
  let data = await fs.readFile(
    "/home/gcdhg/project/git/taskDel/res/responds.json",
    "utf-8"
  );
  expect(JSON.stringify(res)).toBe(data.toString());
});
