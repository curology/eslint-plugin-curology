const { execSync } = require("child_process");
const path = require("path");

const getFilePath = (dirname) => path.resolve(dirname, "index.js");

/**
 * `generateTest` is a convenience method that captures the eslint configuration as a snapshot,
 * that way when we update dependencies + settings we can clearly see what changes are taking effect.
 *
 * @param {string} dirname Should pass __dirname in from test directory adjacent to config file
 */
const generateTest = (dirname) => {
  test("serializes to a snapshot", () => {
    const path = getFilePath(dirname);

    const eslintConfig = execSync(
      `yarn run eslint --no-eslintrc -c ${path} --print-config ${path}`,
      { encoding: "utf8" }
    );

    const configJson = JSON.parse(
      eslintConfig.substring(eslintConfig.indexOf("{"))
    );

    /**
     * Parser points to `node_modules` path which depends on which
     * machine is running this suite, so local/CI is different
     */
    const { parser, ...otherConfigOptions } = configJson;

    expect(parser === undefined).toBe(false);
    expect(otherConfigOptions).toMatchSnapshot();
  });
};

module.exports = {
  generateTest,
};
