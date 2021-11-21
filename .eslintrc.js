// .eslintrc.js
module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    // Airbnb style guide 적용
    'airbnb-base',
    // TypeScript ESLint recommanded style 적용
    'plugin:@typescript-eslint/eslint-recommended',
  ],
};
