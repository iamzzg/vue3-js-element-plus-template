import path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteMockServe } from "vite-plugin-mock"; // 引入mock
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Inspect from "vite-plugin-inspect";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://icones.netlify.app/collection/mdi?s=account-box-multiple
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import WindiCSS from "vite-plugin-windicss";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export function createPlugins({ command }) {
  let prodMock = false;
  return [
    vue(),
    vueJsx(),
    // 按需引入组件库，不需要手动带入组件以及样式,importStyle:'sass',可以用来覆盖element-plus的scss变量
    AutoImport({
      imports: ["vue", "vue-router"], // 不再需要手动导入api了
      resolvers: ElementPlusResolver({ importStyle: "sass" }),
      // Generate corresponding .eslintrc-auto-import.json file.,配置到eslintrc.js中,防止eslint报un-def错误
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass" }), IconsResolver()]
    }),
    Icons({
      // experimental,不需要提前下载图标集,自动下载
      autoInstall: true
    }),
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve", //是否使用本地mock文件,生产环境下不使用
      prodEnabled: command !== "serve" && prodMock,
      // 生产环境下注入的代码
      injectCode: `
            import { setupProdMockServer } from './mockProdServer';
            setupProdMockServer();
          `
    }),
    WindiCSS(),
    Inspect(), //localhost:3000/__inspect/查看
    // 生产svg雪碧图
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]"

      /**
       * 自定义插入位置
       * @default: body-last
       */
      // inject?: 'body-last' | 'body-first'

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      // customDomId: "__svg__icons__dom__"
    })
  ];
}
