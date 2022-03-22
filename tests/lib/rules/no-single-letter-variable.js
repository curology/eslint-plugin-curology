/**
 * @fileoverview Do not allow single letter variable names
 * @author Seiji Naganuma
 */
"use strict";

const path = require('path');

const NODE_MODULES = '../../../node_modules';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-single-letter-variable"),

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

var ERROR_MESSAGE = "No single letter variables. Be more descriptive.";

var ruleTester = new RuleTester();
ruleTester.run("no-single-letter-variable", rule, {

    valid: [
      "const hello = 'world'",
      "let hello = 'world'",
      "var hello = 'world'",
      "var hello = 'world', something = 'test'",
      "const { hello } = thing;",
      "const { hello, ...rest } = thing;",
      "const { hello: world } = thing;",
      "import test from 'test';",
      "import { test } from 'test';",
      "function test (hello) {};",
      "function test ({ hello }) {};",
      "function test ({ hello, ...rest }) {};",
      "test => {};",
      "({ test }) => {};",
      "({ hello, ...rest }) => {};",
      "(test, test1) => {};",
      "class Test { test = arg1 => {} };",
      "class Test { test(arg1) {} };",
    ],

    invalid: [
        {
            code: "var e = 'hello';",
            errors: [{
                message: ERROR_MESSAGE,
                type: "VariableDeclaration"
            }]
        },
        {
            code: "const e = 'hello';",
            errors: [{
                message: ERROR_MESSAGE,
                type: "VariableDeclaration"
            }]
        },
        {
            code: "let e = 'hello';",
            errors: [{
                message: ERROR_MESSAGE,
                type: "VariableDeclaration"
            }]
        },
        {
            code: "const test = 'world', e = 'hello';",
            errors: [{
                message: ERROR_MESSAGE,
                type: "VariableDeclaration"
            }]
        },
        {
            code: "const { e } = thing;",
            errors: [{
                message: ERROR_MESSAGE,
                type: "VariableDeclaration"
            }]
        },
        {
            code: "const { test, ...e } = thing;",
            errors: [{
                message: ERROR_MESSAGE,
                type: "VariableDeclaration"
            }]
        },
        {
            code: "const { test: e } = thing;",
            errors: [{
                message: ERROR_MESSAGE,
                type: "VariableDeclaration"
            }]
        },
        {
            code: "import e from 'test';",
            errors: [{
                message: ERROR_MESSAGE,
                type: "ImportDeclaration"
            }]
        },
        {
            code: "import { e } from 'test';",
            errors: [{
                message: ERROR_MESSAGE,
                type: "ImportDeclaration"
            }]
        },
        {
            code: "function test (e) {};",
            errors: [{
                message: ERROR_MESSAGE,
                type: "FunctionDeclaration"
            }]
        },
        {
            code: "function test ({ e }) {};",
            errors: [{
                message: ERROR_MESSAGE,
                type: "FunctionDeclaration"
            }]
        },
        {
            code: "function test ({ test, ...e }) {};",
            errors: [{
                message: ERROR_MESSAGE,
                type: "FunctionDeclaration"
            }]
        },
        {
            code: "const func = function (e) {}",
            errors: [{
                message: ERROR_MESSAGE,
                type: "FunctionExpression"
            }]
        },
        {
            code: "const func = function ({ e }) {}",
            errors: [{
                message: ERROR_MESSAGE,
                type: "FunctionExpression"
            }]
        },
        {
            code: "const func = function ({ hello, ...e }) {}",
            errors: [{
                message: ERROR_MESSAGE,
                type: "FunctionExpression"
            }]
        },
        {
            code: "e => {};",
            errors: [{
                message: ERROR_MESSAGE,
                type: "ArrowFunctionExpression"
            }]
        },
        {
            code: "({ e }) => {};",
            errors: [{
                message: ERROR_MESSAGE,
                type: "ArrowFunctionExpression"
            }]
        },
        {
            code: "({ hello, ...e }) => {};",
            errors: [{
                message: ERROR_MESSAGE,
                type: "ArrowFunctionExpression"
            }]
        },
        {
            code: "(e, test) => {};",
            errors: [{
                message: ERROR_MESSAGE,
                type: "ArrowFunctionExpression"
            }]
        },
        {
            code: "class Test { test = e => {} };",
            errors: [{
                message: ERROR_MESSAGE,
                type: "ArrowFunctionExpression"
            }]
        },
        {
            code: "class Test { test(e) {} };",
            errors: [{
                message: ERROR_MESSAGE,
                type: "FunctionExpression"
            }]
        },
    ]
});
