const { cypress } = require(".");
const { generateTest } = require("../tests/utils");

describe("eslint-plugin-curology", () => {
  describe("cypress config", () => {
    generateTest(__dirname, cypress);
  });
});
