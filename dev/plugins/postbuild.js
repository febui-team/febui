const { readdirSync } = require("fs");
const path = require("path");
const typesPath = path.resolve(__dirname, "..", "types");
const distPath = path.resolve(__dirname, "..", "dist/@types");
readdirSync(typesPath).forEach((t) => {
  const typesPath = path.resolve(__dirname, "..", "types");
});
