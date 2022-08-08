import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// 按需引入组件库，不需要手动带入组件以及样式,importStyle:'sass',可以用来覆盖element-plus的scss变量
export function AutoImportDeps() {
  return AutoImport({
    imports: ["vue", "vue-router"], // 不再需要手动导入api了
    resolvers: ElementPlusResolver({ importStyle: "sass" }),
    // 生成 .eslintrc-auto-import.json file.,配置到eslintrc.js中,防止eslint报un-def错误
    eslintrc: {
      enabled: true, // Default `false`
      filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    }
  });
}
