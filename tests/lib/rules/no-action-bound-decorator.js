/**
 * @fileoverview We prefer using arrow function to bind `this` instead of MobX&#39;s @action.bound decorator
 * @author Seiji Naganuma
 */
"use strict";

const path = require('path');

const NODE_MODULES = '../../../node_modules';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-action-bound-decorator"),
  RuleTester = require("eslint").RuleTester;

  RuleTester.setDefaultConfig({
    parser: path.join(__dirname, NODE_MODULES, 'babel-eslint'),
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module"
    }
  });


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ERRORS = [{
  message: "Prefer arrow function to bind `this` over @action.bound",
  type: "MethodDefinition"
}];

var ruleTester = new RuleTester();
ruleTester.run("no-action-bound-decorator", rule, {

    valid: [
      "class Test { @action test() {} }",
      "class Test { test () {} }",
      "class Test { @action test = () => {} }",
      "class Test { test = () => {} }"
    ],

    invalid: [
        {
            code: "class Test { @action.bound test () {} }",
            errors: ERRORS
        }
    ]
});
