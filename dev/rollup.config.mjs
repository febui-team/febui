import strip from "@rollup/plugin-strip";
import externals from "rollup-plugin-node-externals";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { glob } from "glob";
import { createHash } from "crypto";
import { join, relative, resolve } from "path";
import { copyFileSync, readdirSync } from "fs";

const inputFiles = Object.fromEntries(
  glob
    .sync("./src/{component,api,hooks,utils,theme}/**/*.{ts,tsx,less,css,js}")
    .map((file) => [createHash("md5").update(file).digest("hex"), file])
);

const PostBuildPlugin = () => {
  const alias = {
    "@": "./src",
    "#": "./src/component",
    "+": "./src/component/icons",
  };
  return {
    name: "post-build",
    generateBundle(options, bundle) {
      const files = Object.keys(bundle);
      if (files.length > 0) {
        files.forEach((fileName) => {
          const file = bundle[fileName];
          
          if (/\.d\.ts$/.test(fileName)) {
            file.source = file.source.replace(
              /import\s+.*from\s+".*"/g,
              (a) => {
                return a
                  .replace(/(@|#|\+)/, (a) => join("@types", alias[a]))
                  .replace(/"(@types[^"]*?)"/g, (match, p1) => {
                    return `"${'./'+relative(resolve(fileName, ".."), './'+p1)}"`;
                  })
                  .replace(/\\/g, "/");
              }
            );
          }
        });
      }
    },
  };
};


const rollupConfig = {
  input: {
    index: "./index.ts",
    ...inputFiles,
  },
  output: {
    dir: "./dist",
    format: "es",
    preserveModules: true,
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationMap:true,
      declarationDir: "./dist/@types",
      outDir: "./dist",
      exclude: ["./src/test/**", "./src/route/**", "./src/index.tsx"],
    }),
    strip({
      include: ["**/*.ts", "**/*.tsx"],
      functions: ["console.*", "assert.*"],
      sourceMap: false,
    }),
    terser(),
    externals({
      devDeps: false,
    }),
    postcss({
      extensions: [".css", ".less"],
      modules: true,
      extract: true,
      minimize: true,
      use: {
        less: { javascriptEnabled: true },
      },
    }),
    PostBuildPlugin()
  ],
};

export default rollupConfig;
