/**
 * @fileoverview We prefer using arrow function to bind `this` instead of MobX's @action.bound decorator
 * @author Seiji Naganuma
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "We prefer using arrow function to bind `this` instead of MobX's @action.bound decorator",
            category: "Best Practice",
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create: function(context) {
        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
          MethodDefinition: function(node) {
            // bail if no decorators
            if (!node.decorators) { return; }

            // iterate through decorators
            node.decorators.forEach(function (decorator) {
              // bail if no expression
              if (!decorator.expression) { return; }
              // bail if expression has no object or property
              if (!decorator.expression.object || !decorator.expression.property) { return;}

              if (decorator.expression.object.name === 'action'
                  && decorator.expression.property.name === 'bound') {
                context.report(node, "Prefer arrow function to bind `this` over @action.bound");
              }
            });
          }
        };
    }
};
