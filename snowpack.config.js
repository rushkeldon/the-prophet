module.exports = {
  mount: {
    public: "/",
    src: "/"
  },
  plugins: [
    ["@snowpack/plugin-react-refresh", { babelOptions: { presets: ["@babel/preset-react"] } }],
  ],
  buildOptions: {
    out: "dist",
    clean: false
  },
  packageOptions: {
    external: ["react", "react-dom"],
  },
};
