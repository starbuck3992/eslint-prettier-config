import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    eslint: resolve(__dirname, 'eslint/eslint.config.js'),
    prettier: resolve(__dirname, 'prettier/prettier.config.js')
};
