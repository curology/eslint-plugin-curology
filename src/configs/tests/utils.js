const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const { isJson } = require("../utils");

const getFilePath = (dirname) => (file) => path.resolve(dirname, file);

const generateTest = (dirname, config) => {
  test("serializes to a snapshot", () => {
    const baseJson = JSON.stringify(config);
    const setPath = getFilePath(dirname);

    fs.writeFileSync(setPath("fixture.json"), baseJson, {
      flag: "w",
    });

    const eslintConfig = execSync(
      `yarn run eslint --no-eslintrc -c ${setPath(
        "fixture.json"
      )} --print-config ${setPath("index.js")}`,
      {
        encoding: "utf8",
      }
    );

    const configJson = JSON.parse(
      eslintConfig.substring(eslintConfig.indexOf("{"))
    );

    if (!isJson(configJson)) {
      throw new Error("parse error");
    }

    /**
     * We don't care about the parser option; the TypeScript
     * config will also fail in CI due to directory path
     */
    const { parser, ...otherConfigOptions } = configJson;

    expect(parser === undefined).toBe(false);
    expect(otherConfigOptions).toMatchSnapshot();
  });
};

module.exports = {
  generateTest,
};
