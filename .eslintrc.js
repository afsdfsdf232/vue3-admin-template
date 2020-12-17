/*
 * @Author: your name
 * @Date: 2020-12-15 09:21:26
 * @LastEditTime: 2020-12-15 13:58:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vehicle-mp\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'

  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off'
  }
}
