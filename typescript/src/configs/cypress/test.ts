import { cypress } from '.';
import { generateTest } from '../../tests/utils';

describe('eslint-plugin-curology', () => {
  describe('cypress config', () => {
    generateTest(__dirname, cypress);
  });
});
