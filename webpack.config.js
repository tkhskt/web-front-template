const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js/index.js", // バンドル前のやつのエントリポイント
  output: {
    // バンドル先
    filename: "bundle.js",
    path: path.join(__dirname, "./dist/js"),
  },
  optimization: {
    minimize: true,
    minimizer: [
      // js圧縮
      new TerserPlugin({
        extractComments: "all", // コメント削除
        terserOptions: {
          compress: {
            drop_console: false, // console.log削除
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window)\/).*/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        ],
      },
    ],
  },
};
