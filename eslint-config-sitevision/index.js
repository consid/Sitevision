module.exports = {
  globals: {},
  ignorePatterns: ["/assets", "/src", "gulpfile.js"],
  rules: {
    // code styles (warnings)
    "semi": 1,
    "prefer-spread": 1,
    "indent": [1, 3],
    "arrow-spacing": [1, {"before": true, "after": true}],
    "comma-spacing": [1, {"before": false, "after": true}],
    "key-spacing": [1, {"beforeColon": false, "afterColon": true}],
    "max-statements-per-line": [1, {"max": 1}],
    "array-bracket-spacing": [1, "always"],
    "object-curly-spacing": [1, "always"],
    "operator-linebreak": [1, "none"],
    "linebreak-style": [1, "unix"],
    "quotes": [1, "single"],
    // Problems (error)
    "func-names": [2, "never"],
    "prefer-arrow-callback": 2,
    "no-use-before-define": 2,
    "no-unreachable-loop": 2,
    "no-floating-decimal": 2,
    "dot-notation": [2, { "allowKeywords": false }],
    "no-empty-function": 2,
    "func-style": ["error", "expression"],
    "vars-on-top": 2,
    "no-var": 2
  }
};