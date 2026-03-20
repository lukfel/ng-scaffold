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
  'quotes': ['error', 'single'],
  '@typescript-eslint/no-unused-vars': 'error',
  'object-curly-spacing': ['error', 'always'],
  '@typescript-eslint/no-inferrable-types': 'off',
  'no-console': 'error',
  'no-else-return': 'error',
  'unused-imports/no-unused-imports': 'error',
};

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
  // App TypeScript files
  {
    files: ['src/**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
      prettierConfig,
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
      ...commonTsRules,
    },
  },
  // Library TypeScript files
  {
    files: ['projects/ng-scaffold/**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
      prettierConfig,
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'lf', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'lf', style: 'kebab-case' },
      ],
      ...commonTsRules,
    },
  },
  // HTML templates
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          bracketSameLine: true,
          bracketSpacing: true,
          htmlWhitespaceSensitivity: 'ignore',
          endOfLine: 'auto',
          printWidth: 100,
        },
      ],
    },
  },
);
