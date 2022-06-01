module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': ['warn'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'off',
        'no-trailing-spaces': 'off',
        quotes: 'off',
        semi: 'off',
      },
    },
  ],
};
