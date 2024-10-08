

export default {
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
        printWidth: 100,
        htmlWhitespaceSensitivity: 'ignore'
      }
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
    'import/no-duplicates': 'off',
    'no-useless-catch': 'off'
  },
  ignores: ["node_modules", "dist", "build"]
}