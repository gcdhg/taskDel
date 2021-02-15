// const path = require("path");
const { promises: fs } = require("fs");
const path = require("path");

const saveDataTofile = async (data) => {
  try {
    const rootpath = __dirname.replace("/helpers", "");
    const filepath = path.join(rootpath, '/res/responds.json');
    await fs.writeFile(filepath, data);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  saveDataTofile,
};
