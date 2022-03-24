/**
 * @fileoverview Do not allow single letter variable names
 * @author Seiji Naganuma
 */

import { Rule } from 'eslint';
import { Node, ObjectPattern, Pattern } from 'estree';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export const noSingleLetterVariable: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'Do not allow single letter variable names',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: undefined,
    schema: [],
  },

  create: function (context) {
    const identifierCheck = function (topNode: Node, identifierNode: Pattern) {
      if (identifierNode.type !== 'Identifier') {
        return;
      }

      if (identifierNode.name.length <= 1) {
        context.report({
          node: topNode,
          message: 'No single letter variables. Be more descriptive.',
        });
      }
    };

    const objectPatternCheck = function (
      topNode: Node,
      objectPatternNode: ObjectPattern,
    ) {
      objectPatternNode.properties.forEach(function (property) {
        switch (property.type) {
          case 'Property':
            identifierCheck(topNode, property.value);
            break;
          case 'RestElement':
            identifierCheck(topNode, property.argument);
            break;
          default:
        }
      });
    };

    const functionNodeCheck: Rule.NodeListener['FunctionDeclaration'] =
      function (node) {
        node.params.forEach(function (param) {
          switch (param.type) {
            case 'Identifier':
              identifierCheck(node, param);
              break;
            case 'ObjectPattern':
              objectPatternCheck(node, param);
              break;
            default:
          }
        });
      };

    const functionExpressionCheck: Rule.NodeListener['FunctionExpression'] =
      function (node) {
        node.params.forEach(function (param) {
          switch (param.type) {
            case 'Identifier':
              identifierCheck(node, param);
              break;
            case 'ObjectPattern':
              objectPatternCheck(node, param);
              break;
            default:
          }
        });
      };

    const arrowFunctionExpressionCheck: Rule.NodeListener['ArrowFunctionExpression'] =
      function (node) {
        node.params.forEach(function (param) {
          switch (param.type) {
            case 'Identifier':
              identifierCheck(node, param);
              break;
            case 'ObjectPattern':
              objectPatternCheck(node, param);
              break;
            default:
          }
        });
      };

    const ruleListener: Rule.RuleListener = {
      VariableDeclaration: function (node) {
        node.declarations.forEach(function (declaration) {
          switch (declaration.id.type) {
            case 'Identifier':
              identifierCheck(node, declaration.id);
              break;
            case 'ObjectPattern':
              objectPatternCheck(node, declaration.id);
              break;
            default:
          }
        });
      },
      ImportDeclaration: function (node) {
        node.specifiers.forEach(function (specifier) {
          identifierCheck(node, specifier.local);
        });
      },
      FunctionDeclaration: functionNodeCheck,
      FunctionExpression: functionExpressionCheck,
      ArrowFunctionExpression: arrowFunctionExpressionCheck,
    };

    return ruleListener;
  },
};
