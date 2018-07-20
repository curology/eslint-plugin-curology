/**
 * @fileoverview Specify imports as screaming snakecase.
 * @author Curology
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/import-screaming-snake-case"),

    RuleTester = require("eslint").RuleTester;

    RuleTester.setDefaultConfig({
      parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
      }
    });

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var OPTIONS = [["constants/**"]];
var ERROR = [{
  message: "Constants must be declared in SCREAMING_SNAKE_CASE",
  type: "ImportDeclaration"
}];

var ruleTester = new RuleTester();
ruleTester.run("import-screaming-snake-case", rule, {

    valid: [
      {
        code: "import TEST_CONSTANT from 'constants/testConstant'",
        options: OPTIONS
      },
      {
        code: "import regularImport from 'files/regularImport'",
        options: OPTIONS
      }
    ],

    invalid: [
        {
            code: "import testConstant from 'constants/testConstant'",
            options: OPTIONS,
            errors: ERROR
        },
        {
            code: "import nestedConstant from 'constants/things/nested'",
            options: OPTIONS,
            errors: ERROR
        }
    ]
});
