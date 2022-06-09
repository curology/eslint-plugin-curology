/**
 * @fileoverview Prefer named imports
 * @author Alyssa Melendez
 */
"use strict";

const path = require("path");
const { RuleTester } = require("eslint");

const preferNamedImportRule = require(".");

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const NODE_MODULES_PATH = "../../../node_modules";

const ruleTester = new RuleTester({
  parser: path.join(__dirname, NODE_MODULES_PATH, "@babel/eslint-parser"),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    requireConfigFile: false,
  },
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const OPTIONS = [{ paths: [".", "./index"] }];

ruleTester.run("prefer-named-import", preferNamedImportRule, {
  valid: [
    {
      code: "import { Module } from '.';",
      options: OPTIONS,
    },
    {
      code: "import { Module } from './index';",
      options: OPTIONS,
    },
    {
      code: "import Module from 'components/modules/module';",
      options: OPTIONS,
    },
    {
      code: "import React from 'react';",
      options: OPTIONS,
    },
  ],

  invalid: [
    {
      code: "import Module from '.';",
      options: OPTIONS,
      errors: [
        {
          message: `Please only use named imports for '.'`,
          type: "ImportDeclaration",
        },
      ],
    },
    {
      code: "import Module from './index';",
      options: OPTIONS,
      errors: [
        {
          message: `Please only use named imports for './index'`,
          type: "ImportDeclaration",
        },
      ],
    },
  ],
});
