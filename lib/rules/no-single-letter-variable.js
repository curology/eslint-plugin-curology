/**
 * @fileoverview Do not allow single letter variable names
 * @author Seiji Naganuma
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Do not allow single letter variable names",
            category: "Best Practices",
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create: function(context) {
        const functionNodeCheck = function (node) {
            node.params.forEach(function (param) {
              if (param.name.length <= 1) {
                context.report(node, 'No single letter variables. Be more descriptive.');
              }
            });
        };

        return {
          VariableDeclaration: function (node) {
            node.declarations.forEach(function (declaration) {
              if (declaration.id.name.length <= 1) {
                context.report(node, 'No single letter variables. Be more descriptive.');
              }
            });
          },
          ImportDeclaration: function (node) {
            node.specifiers.forEach(function (specifier) {
              if (specifier.local.name.length <= 1) {
                context.report(node, 'No single letter variables. Be more descriptive.');
              }
            });
          },
          FunctionDeclaration: functionNodeCheck,
          FunctionExpression: functionNodeCheck,
          ArrowFunctionExpression: functionNodeCheck,
        };
    }
};
