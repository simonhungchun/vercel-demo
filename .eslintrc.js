module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    'object-curly-newline': 'off',
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-alert': process.env.NODE_ENV === 'development' ? 'off' : 'error',
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
// 跨平台（windows macos linux）的环境变量设置工具
// cross-env
// 在nodejs中设置的环境变量如何获取 process.env.[key] 类似于浏览器的window对象
// 通过在npm run start脚本运行时设置process.env.NODE_ENV === "development" 表示项目处于开发阶段可以使用console.log、alert
// 否则不行
