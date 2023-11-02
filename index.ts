/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: "latest",
        sourceType: "module",
        allowImportExportEverywhere: true,
    },
    overrides: [
        {
            files: ["*.json", "*.json5"],
            extends: ["plugin:@intlify/vue-i18n/base"],
        },
        {
            files: ["*.yaml", "*.yml"],
            extends: ["plugin:@intlify/vue-i18n/base"],
        },
    ],
    extends: [
        "eslint:recommended",
        "eslint-config-google",
        "plugin:vue/vue3-essential",
        "plugin:@intlify/vue-i18n/recommended",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-prettier/skip-formatting",
    ],
    plugins: ["vue", "@typescript-eslint", "unused-imports", "import"],
    env: {
        browser: true,
        node: true,
    },
    rules: {
        // Optional.
        "@intlify/vue-i18n/no-missing-keys": "error",
        "@intlify/vue-i18n/no-dynamic-keys": "error",
        "@intlify/vue-i18n/no-unused-keys": [
            "error",
            {
                src: "./src",
                extensions: [".js", ".vue"],
                ignores: [],
                enableFix: false,
            },
        ],
        camelcase: "off",
        "vue/multi-word-component-names": "off",
        "require-jsdoc": "off",
        "vue/require-prop-types": "error",
        "vue/require-default-prop": "error",
        "import/no-duplicates": "error",
        "unused-imports/no-unused-imports": "error",
        "max-len": "off",
        capIsNew: `off`,
        "vue/max-len": [
            "error",
            {
                code: 250,
                template: 1000,
                ignoreTemplateLiterals: true,
                ignoreUrls: true,
                ignoreStrings: true,
            },
        ],
        "import/order": [
            "error",
            {
                "newlines-between": "never",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "object",
                    "type",
                ],
                pathGroups: [
                    {
                        pattern: "@/**",
                        group: "internal",
                    },
                ],
            },
        ],
        '@vue/eslint-config-prettier/skip-formatting': [
            'error',
            {
                arrowParens: 'avoid',
                printWidth: 100,
                singleQuote: true,
                trailingComma: 'all',
            },
        ],
    },
    settings: {
        "vue-i18n": {
            localeDir: "./src/translations/*.json", // extension is glob formatting!
            // Specify the version of `vue-i18n` you are using.
            // If not specified, the message will be parsed twice.
            messageSyntaxVersion: "^9.0.0",
        },
    },
};
