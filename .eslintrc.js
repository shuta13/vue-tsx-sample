module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-extra-semi": "warn",
    "no-undef": "warn",
    "no-multiple-empty-lines": [2, { max: 1 }],
    "no-extra-parens": 1,
    "arrow-parens": "off",
    quotes: ["off", "single"],
    "space-before-blocks": [
      "warn",
      { classes: "always", functions: "always", keywords: "always" }
    ]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
