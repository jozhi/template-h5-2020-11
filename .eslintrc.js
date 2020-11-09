module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    rules: {
      // "semi": ["error", "never"], // 不要分号
      // "comma-dangle": ["error", "never"],
      'no-unused-vars': 0,
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',//生产环境禁用console
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',//生产环境禁用debugger
      // allow async-await
      'generator-star-spacing': 'off',
      // 强制使用驼峰拼写法命名规定
      'camelcase': [0, {
          'properties': 'always'
      }],
      // 要求使用 ===和 !==
      'eqeqeq': [2, 'allow-null'],
      // 禁止出现多行空行
      'no-multiple-empty-lines': [2, {
          // 最大连续空行数
          max: 2
      }],
      // 强制在function的左括号之前使用一致的空格
      "space-before-function-paren": [2, "never"],
      // 强烈使用一致的反勾号``、双引号""或单引号''
      'quotes': [2, 'single', {
          // 允许字符串使用单引号或者双引号，只要字符串中包含了一个其他引号，否则需要转义
          'avoidEscape': true,
          // 允许字符串使用反勾号
          'allowTemplateLiterals': true
      }],
      //强制关键字周围空格的一致性
      'keyword-spacing': ["error", {
          "before": true
      }],
      // 不允许类成员中有重复的名称 (no-dupe-class-members)
      "no-dupe-class-members": "error",
      // 缩进是2个空格
      'indent': [2, 2, {
          'SwitchCase': 1
      }],
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }
  