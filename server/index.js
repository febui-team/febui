const express = require("express");
const generate = require("./generate");
const fs = require("fs");
const path = require("path");
const lodash = require('lodash')

generate()

const update = lodash.debounce(() => {
  generate()
}, 1000)

const app = express();
fs.watch(path.resolve(__dirname, "../dev/src/test"), (eventType, fileName) => { 
  update()
});

app.listen(6789, (err) => {
  if (!err) {
    console.log("FebServer started.");
  }
});
