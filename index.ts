// index.js
const path = require('path');

module.exports = {
    eslint: path.resolve(__dirname, '.eslintrc.cjs'),
    prettier: path.resolve(__dirname, '.prettierrc.json')
};
