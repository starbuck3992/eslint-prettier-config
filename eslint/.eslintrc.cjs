require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    env: {
        browser: true,
        node: true,
    },
    root: true,
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    settings: {
        'vue-i18n': {
            localeDir: './src/translations/*.json',
            messageSyntaxVersion: '^9.0.0',
        },
    },
    plugins: ['vue', 'unused-imports', 'import', '@intlify/vue-i18n', '@typescript-eslint', 'tailwindcss'],
    extends: [
        'eslint:recommended',
        'eslint-config-google',
        'plugin:vue/vue3-essential',
        'plugin:tailwindcss/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@intlify/vue-i18n/recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting',
    ],
    overrides: [
        {
            files: ['*.json', '*.json5'],
            extends: ['plugin:@intlify/vue-i18n/base'],
        },
        {
            files: ['*.yaml', '*.yml'],
            extends: ['plugin:@intlify/vue-i18n/base'],
        },
    ],
    ignorePatterns: ['/generated/**/*', '/dist/**/*', 'node_modules/**/*', 'public/*', '/src/modules/assets/**/*'],
    rules: {
        'vue/block-order': [
            'error',
            {
                order: [['template', 'script[setup]'], 'style[scoped]'],
            },
        ],
        '@intlify/vue-i18n/no-html-messages': 'off',
        '@intlify/vue-i18n/no-raw-text': 'error',
        '@intlify/vue-i18n/no-duplicate-keys-in-locale': [
            'error',
            {
                ignoreI18nBlock: false,
            },
        ],
        '@intlify/vue-i18n/no-missing-keys-in-other-locales': [
            'error',
            {
                ignoreLocales: [],
            },
        ],
        '@intlify/vue-i18n/no-unused-keys': [
            'error',
            {
                src: './src',
                extensions: ['.js', '.vue'],
                ignores: ['codebooks\\*.*', '/.*\\.codebooks\\..*/', ], // ignore codebooks
                enableFix: false,
            },
        ],
        '@intlify/vue-i18n/no-missing-keys': [
            'error',
        ],
        '@intlify/vue-i18n/no-v-html': [
            'off',
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/multi-word-component-names': 'off',
        'require-jsdoc': 'off',
        'vue/require-prop-types': 'error',
        'vue/require-default-prop': 'error',
        'vue/no-reserved-component-names': 'off',
        'tailwindcss/no-custom-classname': 'off',
        'import/no-duplicates': 'error',
        'unused-imports/no-unused-imports': 'error',
        'max-len': 0,
        camelcase: 'off',
        capIsNew: `off`,
        'import/order': [
            'error',
            {
                'newlines-between': 'never',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                ],
            },
        ],
    },
};
