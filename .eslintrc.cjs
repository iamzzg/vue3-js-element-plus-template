/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  globals: {
    // 解决eslint提示未引入的变量的名字报错
    ElMessage: "readonly",
    ElMessageBox: "readonly",
    ElNotification: "readonly"
  },
  env: {
    // 添加环境下的全局变量名字,让eslint不报错
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    // 解决自动导入vue的api 的未定义报错
    "./.eslintrc-auto-import.json",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier"
  ],
  rules: {
    "vue/comment-directive": [0],
    "vue/multi-word-component-names": ["off"]
  }
};
