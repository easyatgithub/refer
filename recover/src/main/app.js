const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = "1234";
const fs = require("fs");
const filUtils = require("../utils/fileUtil");
const os = require("os");
const path = require("path");

var dir = path.join(os.tmpdir(), "eTool");
var filePath = path.join(dir, "index.html");

var server = {
  init() {
    app.listen(port);
    app.use(bodyParser.json());

    app.get("/", async (_, res) => {
      res.sendfile(filePath);
    });

    return "[FINISH INIT]";
  }
};

export default server;

async function getlogFiles() {
  console.log(__dirname); //到 /eTool
  var dir = path.join(os.tmpdir(), "eTool");
  var filePath = path.join(dir, "index.html");
  var s = filUtils.read(filePath);
  return s;
}

function convertTextToJson(text) {
  text = text.replace(/(\r\n|\n|\r)/gm, ",");
  text = "[" + text.substring(0, text.length - 1) + "]";
  return JSON.parse(text);
}
