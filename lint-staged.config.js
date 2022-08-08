module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": [
    "prettier --write--parser json"
  ],
  "package.json": ["prettier --write"],
  // "*.vue": ["eslint --fix", "prettier --write", "stylelint --fix"],//stylelint14不兼容vue3,报错
  "*.vue": ["eslint --fix", "prettier --write"],
  "*.md": ["prettier --write"],
  "*.{scss,less,styl,html}": ["stylelint --fix", "prettier --write"]
};
