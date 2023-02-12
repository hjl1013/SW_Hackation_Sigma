module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
  ],
  root: true,
  env: {
      node: true,
      jest: true,
  },
  ignorePatterns: ['/*', '!/src'],
  rules: {
      eqeqeq: ['warn', 'always'],
  },
}
