/**
 * @fileoverview Specify imports as screaming snakecase.
 * @author Seiji Naganuma
 */
"use strict";

//----------------------------------------------------------------------
// Variables
//----------------------------------------------------------------------
var minimatch = require("minimatch");
var REGEX =/^([A-Z]||_)+$/

//----------------------------------------------------------------------
// Helpers
//----------------------------------------------------------------------

function isIdentifier(nodeSpecifier) {
  return nodeSpecifier.type == 'ImportDefaultSpecifier' && nodeSpecifier.local.type == 'Identifier';
};

function isScreamingSnakeCase(string) {
  return REGEX.test(string);
};


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Specify imports as screaming snakecase.",
            category: "Best Practice",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
          {
            type: 'array',
            items: { type: "string" },
            uniqueItems: true
          }
        ]
    },

    create: function(context) {
        //----------------------------------------------------------------------
        // Variables
        //----------------------------------------------------------------------
        var paths = context.options[0] || [];

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------
        function isConstantImport(string) {
          return !!paths.find(function(glob) {
            return minimatch(string, glob);
          });
        };

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------
        return {
          ImportDeclaration: function(node) {
            if (isConstantImport(node.source.value)) {
              node.specifiers.forEach(function(specifier) {
                if(isIdentifier(specifier) && !isScreamingSnakeCase(specifier.local.name)) {
                  context.report(node, 'Constants must be declared in SCREAMING_SNAKE_CASE');
                }
              });
            }
          }
        };
    }
};
