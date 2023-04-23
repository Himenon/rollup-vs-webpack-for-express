import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import originalSwc from "rollup-plugin-swc";

/**
 * @type {import("rollup-plugin-swc").RollupPluginSWC}
 */
const swc = originalSwc.default;

/**
 * @type {import("rollup").RollupOptions}
 */
export default {
  input: "src/app.ts",
  output: {
    format: "cjs",
    file: "dist/rollup-server.cjs",
    generatedCode: {
      constBindings: true,
    }
  },
  plugins: [
    resolve({
      extensions: [".ts", ".mjs", ".js", ".json"],
      moduleDirectories: ["src", "node_modules"],
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
    swc({
      jsc: {
        target: "es2020",
        parser: {
          syntax: "typescript",
          tsx: false,
          dynamicImport: false,
        },
      },
    }),
  ],
}

