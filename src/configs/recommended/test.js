const recommended = require(".");
const { generateTest } = require("../tests/utils");

describe("eslint-plugin-curology", () => {
  describe("recommended config", () => {
    generateTest(__dirname, recommended);
  });
});
