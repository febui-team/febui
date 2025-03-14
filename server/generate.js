/**
 * @file generate.js
 * @description 根据./dev/src/test目录下的文件生成路由配置，生成的文件路径为./dev/src/route/routes.js
 * @example
 * node generate.js
 */
const fs = require("fs");
const path = require("path");
module.exports = async () => {
  const dirPath = path.resolve(__dirname,"../dev/src/test");
  const dirs = fs.readdirSync(dirPath);
  const imports = [];
  const routes = [];
  let id = 1;
  dirs.forEach((fileName, i) => {
    const p = path.resolve(dirPath, fileName);
    const value = String(fs.readFileSync(p));
    const i0 = value.indexOf("@description ") + 13;
    const name = fileName.replace(".tsx", "");
    const label =
      i0 !== -1
        ? value
            .substring(i0, value.indexOf("\n", i0))
            .replaceAll(/[\r|\n|\s+]/g, "")
        : name;
    const ip = "../test/" + name;
    const exports = value.matchAll(/export\s+const\s+[A-Z][a-zA-Z0-9]*/g);
    const components = [];

    for (let export0 of exports) {
      const cname = `Component${id++}`;
      let v = export0[0];
      let title = undefined;

      const i1 = value.lastIndexOf("\n", export0.index);
      const i2 = value.lastIndexOf("\n", i1 - 1);
      const prefix = value.substring(i2 + 1, i1);
      if (/^[\s+]*\/\/\s+/.test(prefix)) {
        title = prefix.replaceAll(/[(//) | (\s+)]/g, "");
      }
      v = v.replace(/export\s+const\s/g, "");
      imports.push(`import {${v} as ${cname}} from '${ip}'`);
      const el = title ? `<><h2>${title}</h2><${cname}/></>` : `<${cname}/>`;
      components.push(el);
    }
    const element = `<><h1>${label}</h1><div>${components.join(
      "<br/>"
    )}</div></>`;
    routes.push(`{label: '${label}', path: '/${name}', element: ${element}}`);
  });
  const res = `/**\n * 路由配置，本文件由代码生成，请勿修改 \n * @file route.js\n */\n${imports.join(
    ";\n"
  )}\nexport const routes = [${routes.join(",")}]`;
  fs.writeFileSync(path.resolve(__dirname, "../dev/src/route/route.js"), res);
  console.log('更新目录');
};
