import { configs } from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

// Временный блок для мягкого перехода.
// Для новых проектов: все правила из этого блока должны быть выставлены в `error`.
const SOFT_MIGRATION_RULES = {
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-empty-object-type': 'warn',
  // Note: you must disable the base rule as it can report incorrect errors
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'warn',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/no-dynamic-delete': 'warn',
  '@typescript-eslint/consistent-type-imports': 'warn',
  '@typescript-eslint/no-import-type-side-effects': 'warn',
  'import/no-cycle': 'warn',
  'import/no-duplicates': 'warn',
  'import/default': 'warn',
  'prefer-const': 'warn',
};

export default defineConfig([
  ...configs.strict,
  importPlugin.flatConfigs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'import/no-named-as-default': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 'warn',
      'prettier/prettier': 'error',
      'import/no-cycle': ['error', { ignoreExternal: true }],
      'import/no-duplicates': ['error', { considerQueryString: true }],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      ...SOFT_MIGRATION_RULES,
    },
    settings: {
      'import/ignore': ['.(scss|less|css)$'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
      },
      'import/resolver': {
        typescript: {},
      },
    },
    ignores: ['.eslintrc.cjs', 'scripts/**', '*.svg', 'dist/**', 'docs/**', 'node_modules/**'],
  },
  eslintPluginPrettierRecommended,
]);
