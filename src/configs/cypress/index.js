const importOrderBaseConfig = require("../shared");

const cypress = {
  extends: ["plugin:cypress/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["cypress"],
  rules: {
    "cypress/no-assigning-return-values": 2,
    "cypress/no-unnecessary-waiting": 2,
    "cypress/no-async-tests": 2,
    "cypress/assertion-before-screenshot": 2,
    "cypress/require-data-selectors": 0,
    "cypress/no-force": 1,
    "cypress/no-pause": 2,
    "@typescript-eslint/ban-ts-ignore": 0,
    camelcase: 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-unused-vars": [
      1,
      {
        argsIgnorePattern: "^_",
      },
    ],
    "import/order": [
      2,
      {
        ...importOrderBaseConfig,
        pathGroups: [
          {
            pattern: "{constants,integration,fixtures}/**",
            group: "parent",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
    "no-console": 0, // `cypress-log-to-output` makes console usage useful for debugging
  },
  env: {
    "cypress/globals": true,
  },
};

module.exports = {
  cypress,
};
