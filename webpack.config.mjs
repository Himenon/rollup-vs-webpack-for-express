import * as path from "path";

/**
 * @type {import("webpack").Configuration}
 */
export default {
    mode: "production",
    target: "node16.13",
    entry: {
      "webpack-server": ["regenerator-runtime", "./src/app.ts"],
    },
    output: {
      path: path.resolve("dist"),
      filename: "[name].cjs",
      clean: false,
    },
    devtool: "source-map",
    optimization: {
      minimize: false,
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "swc-loader",
          },
        },
      ],
    },
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".json"],
      modules: ["node_modules"],
    },
    externalsPresets: { node: true },
  }