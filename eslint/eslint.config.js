import js from '@eslint/js';
import pluginVueI18n from '@intlify/eslint-plugin-vue-i18n';
import skipFormattingConfig from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginImport from 'eslint-plugin-import';
import pluginTailwindcss from 'eslint-plugin-tailwindcss';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default defineConfigWithVueTs(
    // Base recommended configs
    js.configs.recommended,
    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended,

    // Tailwindcss plugin
    ...pluginTailwindcss.configs['flat/recommended'],

    // Skip Prettier formatting
    skipFormattingConfig,

    // Global config
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                allowImportExportEverywhere: true,
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        plugins: {
            'unused-imports': pluginUnusedImports,
            import: pluginImport,
            '@intlify/vue-i18n': pluginVueI18n,
        },

        settings: {
            'vue-i18n': {
                localeDir: './src/translations/*.json',
                messageSyntaxVersion: '^11.0.0',
            },
        },

        rules: {
            // Vue rules
            'vue/block-order': [
                'error',
                {
                    order: [['template', 'script[setup]'], 'style[scoped]'],
                },
            ],
            'vue/multi-word-component-names': 'off',
            'vue/require-prop-types': 'error',
            'vue/require-default-prop': 'error',
            'vue/no-reserved-component-names': 'off',

            // Vue i18n rules
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
            '@intlify/vue-i18n/no-unused-keys': 'off',
            '@intlify/vue-i18n/no-missing-keys': 'error',
            '@intlify/vue-i18n/no-v-html': 'off',

            // TypeScript rules
            '@typescript-eslint/no-explicit-any': 'off',

            // Tailwind rules
            'tailwindcss/no-custom-classname': 'off',

            // Import rules
            'import/no-duplicates': 'error',
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
            'unused-imports/no-unused-imports': 'error',

            // General rules (from Google style guide)
            'require-jsdoc': 'off',
            'max-len': 'off',
            camelcase: 'off',
            'new-cap': 'off',
        },
    },

    // Override for JSON files (i18n)
    {
        files: ['**/translations/**/*.json'],
        ...pluginVueI18n.configs['flat/base'],
    },
    {
        ignores: ['**/dist/**/*', '**/node_modules/**/*'],
    },
);
