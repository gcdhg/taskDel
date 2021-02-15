// const path = require("path");
const { promises: fs } = require("fs");

const saveDataTofile = async (data) => {
  try {
    await fs.writeFile(
      "/home/gcdhg/project/git/taskDel/res/responds.json",
      data
    );
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  saveDataTofile,
};
