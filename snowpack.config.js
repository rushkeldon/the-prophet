module.exports = {
  mount: {
    src: "/dist",
  },
  plugins: [
    ["@snowpack/plugin-react", { babelOptions: { presets: ["@babel/preset-react"] } }],
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2020",
  },
};
