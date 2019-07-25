module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  settings: {
    ecmascript: 6,
    jsx: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  extends: "airbnb",
  rules: {
    "react/jsx-filename-extension": 0,
    "function-paren-newline": 0,
    quotes: [2, "double", { avoidEscape: true }],
    "linebreak-style": 0
  },
  globals: {
    describe: true,
    test: true,
    expect: true,
    afterEach: true
  }
};
