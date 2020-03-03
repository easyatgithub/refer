const fs = require("fs");
const os = require("os");
const path = require("path");
const fileUtil = require("./fileUtil.js");
export default {
  name: "eTool",
  async writeServer(str) {
    console.log(str);
    var dir = path.join(os.tmpdir(), "eTool");
    var filePath = path.join(dir, "index.html");
    fileUtil.write(filePath, str);
  }
};
