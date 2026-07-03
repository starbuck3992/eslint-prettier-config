# @starbuck3992/eslint-prettier-config

Shared ESLint (flat config) and Prettier configuration for Vue 3 / TypeScript projects.
Successor of `@starbuck3992/eslint-config` + `@starbuck3992/prettier-config` (legacy `.eslintrc` format, ESLint 8).

## Requirements

- Node `^20.19.0 || ^22.13.0 || >=24`
- ESLint 10, TypeScript 6, Tailwind CSS 3.4+ or 4

## Installation

```bash
npm install -D @starbuck3992/eslint-prettier-config
```

npm 7+ installs all peer dependencies (eslint, prettier, plugins) automatically.

## Usage

`eslint.config.js`:

```js
export { default } from '@starbuck3992/eslint-prettier-config/eslint';
```

Or extend it:

```js
import config from '@starbuck3992/eslint-prettier-config/eslint';

export default [
    ...config,
    {
        settings: {
            'vue-i18n': {
                localeDir: './src/modules/**/translations/*.json',
                messageSyntaxVersion: '^9.0.0',
            },
        },
        rules: {
            // project-specific overrides
        },
    },
    {
        ignores: ['generated/**', 'public/**'],
    },
];
```

`prettier.config.js`:

```js
export { default } from '@starbuck3992/eslint-prettier-config/prettier';
```

## What's included

- `@eslint/js` recommended
- `eslint-plugin-vue` flat/essential + `@vue/eslint-config-typescript` recommended
- `eslint-plugin-tailwindcss` flat/recommended
- `@intlify/eslint-plugin-vue-i18n` (JSON/YAML translation linting, missing/duplicate key checks, no-raw-text)
- `eslint-plugin-import-x` (import ordering + duplicate detection; replaces `eslint-plugin-import`)
- `eslint-plugin-unused-imports`
- `@vue/eslint-config-prettier/skip-formatting` (formatting is Prettier's job)

## Migrating from v1 / the legacy packages

- ESLint 9 → **10**, flat config only.
- `eslint-plugin-import` → `eslint-plugin-import-x`: rule prefix changed from `import/` to `import-x/` in overrides.
- `eslint-config-google` is gone (dead package, incompatible with flat config).
- `no-irregular-whitespace` is now disabled for `**/translations/**/*.json` out of the box (NBSP is legitimate typography in translations).
- Tailwind plugin is pinned to `^3.18.3`, which supports both Tailwind CSS 3.4+ and 4. Don't upgrade to plugin v4 until the project is on Tailwind CSS 4.
