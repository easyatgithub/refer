const fs = require("fs");
const os = require("os");
const path = require("path");

function makeDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

function write(path, data) {
  fs.writeFile(path, data, function(err) {
    if (err) {
      throw err;
    }
  });
}

function read(filePath) {
  var data = fs.readFileSync(filePath, "utf-8");
  return data;
}
function test() {
  // var dir = os.tmpdir() + "/eTool";
  var dir = path.join(os.tmpdir(), "eTool");
  var filePath = path.join(dir, "index.html");
  makeDir(dir);
  write(filePath, "test");
  var str = read(filePath);
  console.log(str);
}

export { read, write, makeDir, test };
