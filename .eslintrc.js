const fs = require('fs');
const path = require('path');

// const prettierOptions = JSON.parse(
//   fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
// );

module.exports = {
  extends: ['react-app', 'prettier'],
  // plugins: ['prettier'],
  rules: {
    // 'prettier/prettier': ['warn', prettierOptions],
    'no-multi-spaces': ['off'],
    'no-multiple-empty-lines': ['off'],
  },
  // overrides: [
  //   {
  //     files: ['**/*.ts?(x)'],
  //     rules: {
  //       'prettier/prettier': ['warn', prettierOptions]
  //
  //     },
  //   },
  // ],
};
