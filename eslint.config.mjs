// @ts-check
import eslint from '@eslint/js';
import angular from 'angular-eslint';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config['rules']} */
const commonTsRules = {
  '@angular-eslint/no-empty-lifecycle-method': 'error',
  '@angular-eslint/prefer-standalone': 'off',
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      ignoredMethodNames: ['ngOnInit', 'ngOnDestroy', 'ngOnChanges', 'ngAfterViewInit'],
      overrides: {
        accessors: 'off',
        constructors: 'no-public',
        methods: 'explicit',
        properties: 'explicit',
        parameterProperties: 'explicit',
      },
    },
  ],
  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/no-inferrable-types': 'off',
  'no-console': 'error',
  'no-else-return': 'error',
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'error',
    { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
  ],
  'prettier/prettier': 'error',
};

/**
 * Creates a TypeScript config block for an Angular project.
 */
function tsConfig(files, prefix) {
  return {
    files,
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
      prettierConfig,
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      'unused-imports': unusedImports,
      prettier: prettierPlugin,
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix, style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix, style: 'kebab-case' },
      ],
      ...commonTsRules,
    },
  };
}

/** @type {import('typescript-eslint').ConfigArray} */
export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.vscode/**',
      '**/index.html',
      '**/index.*.html',
      '**/*.spec.ts',
    ],
  },
  tsConfig(['src/**/*.ts'], 'app'),
  tsConfig(['projects/ng-scaffold/**/*.ts'], 'lf'),
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
);
