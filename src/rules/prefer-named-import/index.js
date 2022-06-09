/**
 * @fileoverview Prefer named imports
 * @author Alyssa Melendez
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Prefer named imports",
      category: "Best Practices",
      recommended: true,
    },
    fixable: undefined,
    schema: [
      {
        type: "object",
        properties: {
          paths: {
            type: "array",
            items: {
              type: "string",
            },
            uniqueItems: true,
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create: function (context) {
    const restrictedPaths = context.options[0].paths;

    function isRestrictedPath(importSource) {
      let result = false;
      restrictedPaths?.forEach((path) => {
        if (importSource === path) result = true;
      });

      return result;
    }

    return {
      ImportDeclaration(node) {
        const importSource = node.source.value.trim();

        if (
          isRestrictedPath(importSource) &&
          node.specifiers.forEach(function (specifier) {
            if (specifier.type === "ImportDefaultSpecifier") {
              context.report({
                node,
                message: `Please only use named imports for '${importSource}'`,
              });
            }
          })
        );
      },
    };
  },
};
