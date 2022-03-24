import { TSESLint } from '@typescript-eslint/experimental-utils';

import { SEVERITY } from '../../constants';
import { importOrderBaseConfig } from '../shared';

export const cypress = {
  extends: ['plugin:cypress/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['cypress'],
  rules: {
    'cypress/no-assigning-return-values': 'potato',
    'cypress/no-unnecessary-waiting': SEVERITY.ERROR,
    'cypress/no-async-tests': SEVERITY.ERROR,
    'cypress/assertion-before-screenshot': SEVERITY.ERROR,
    'cypress/require-data-selectors': SEVERITY.OFF,
    'cypress/no-force': SEVERITY.WARN,
    'cypress/no-pause': SEVERITY.ERROR,
    '@typescript-eslint/ban-ts-ignore': SEVERITY.OFF,
    camelcase: SEVERITY.OFF,
    '@typescript-eslint/camelcase': SEVERITY.OFF,
    '@typescript-eslint/explicit-function-return-type': SEVERITY.OFF,
    '@typescript-eslint/no-unused-vars': [
      SEVERITY.WARN,
      {
        argsIgnorePattern: '^_',
      },
    ] as TSESLint.Linter.RuleLevelAndOptions,
    'import/order': [
      SEVERITY.ERROR,
      {
        ...importOrderBaseConfig,
        pathGroups: [
          {
            pattern: '{constants,integration,fixtures}/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ] as TSESLint.Linter.RuleLevelAndOptions,
    'no-console': SEVERITY.OFF, // `cypress-log-to-output` makes console usage useful for debugging
  },
  env: {
    'cypress/globals': true,
  },
};
