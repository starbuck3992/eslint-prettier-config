import js from '@eslint/js';
import pluginVueI18n from '@intlify/eslint-plugin-vue-i18n';
import skipFormattingConfig from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginImportX from 'eslint-plugin-import-x';
import pluginTailwindcss from 'eslint-plugin-tailwindcss';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default defineConfigWithVueTs(
    js.configs.recommended,
    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended,
    ...pluginTailwindcss.configs['flat/recommended'],

    // Registers the i18n plugin and assigns the JSONC/YAML parsers to *.json/*.yaml files
    ...pluginVueI18n.configs['flat/base'],

    skipFormattingConfig,

    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        plugins: {
            'unused-imports': pluginUnusedImports,
            'import-x': pluginImportX,
        },

        settings: {
            'vue-i18n': {
                localeDir: './src/translations/*.json',
                messageSyntaxVersion: '^11.0.0',
            },
        },

        rules: {
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

            '@typescript-eslint/no-explicit-any': 'off',

            'tailwindcss/no-custom-classname': 'off',

            'import-x/no-duplicates': 'error',
            'import-x/order': [
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
        },
    },

    // NBSP (U+00A0) is legitimate typography in translations (French "Astuce :", "20 %", ...);
    // config/code JSON keeps the rule
    {
        files: ['**/translations/**/*.json'],
        rules: {
            'no-irregular-whitespace': 'off',
        },
    },
    {
        ignores: ['**/dist/**/*', '**/node_modules/**/*'],
    },
);
