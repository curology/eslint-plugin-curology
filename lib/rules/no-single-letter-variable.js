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
        fixable: null,  // or "code" or "whitespace"
        schema: []
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
          VariableDeclaration: function(node) {
            node.declarations.forEach(function (declaration) {
              const name = declaration.id.name;
              if (name.length <= 1) {
                context.report(node, `No single letter variables`);
              }
            });
          }
        };
    }
};
