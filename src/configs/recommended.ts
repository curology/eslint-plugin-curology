import { importOrderBaseConfig } from './shared';

export const recommended = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['curology'],
  rules: {
    '@typescript-eslint/prefer-ts-expect-error': 2,
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'always-multiline'],
    'consistent-return': 0,
    'curology/no-single-letter-variable': 2,
    'func-names': 0,
    'function-paren-newline': 0,
    'global-require': 0,
    'id-length': 0,
    'import/extensions': [2, 'never'],
    'import/no-cycle': 1,
    'import/no-named-as-default-member': 1,
    'import/no-unresolved': 0,
    'import/order': [2, { ...importOrderBaseConfig }],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    indent: 0,
    'jsx-a11y/anchor-is-valid': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/img-redundant-alt': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/accessible-emoji': 1,
    'max-len': 0,
    'no-confusing-arrow': 0,
    'no-console': 2,
    'no-else-return': 1,
    'no-plusplus': 1,
    'no-static-element-interactions': 0,
    'no-underscore-dangle': 1,
    'object-curly-newline': 0,
    'object-property-newline': [2, { allowAllPropertiesOnSameLine: true }],
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-fragments': [2, 'element'],
    'react/jsx-key': 2,
    'react/jsx-no-useless-fragment': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-array-index-key': 1,
    'react/require-default-props': 2,
    'react/sort-comp': 0,
    'space-before-function-paren': 0,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
};
