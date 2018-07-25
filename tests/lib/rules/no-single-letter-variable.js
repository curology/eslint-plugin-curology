/**
 * @fileoverview Do not allow single letter variable names
 * @author Seiji Naganuma
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-single-letter-variable"),

  RuleTester = require("eslint").RuleTester;

  RuleTester.setDefaultConfig({
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module"
    }
  });

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-single-letter-variable", rule, {

    valid: [
      "const hello = 'world'"
    ],

    invalid: [
        {
            code: "var e = 'hello';",
            errors: [{
                message: "No single letter variables",
                type: "VariableDeclaration"
            }]
        }
    ]
});
