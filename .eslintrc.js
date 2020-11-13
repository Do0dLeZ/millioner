module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: [0, "double"],
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "react/state-in-constructor": 0,
    "implicit-arrow-linebreak": 0,
    "import/no-named-as-default": 0,
    "linebreak-style": 0,
    "no-use-before-define": 0,
    "comma-dangle": 0,
  },
};
