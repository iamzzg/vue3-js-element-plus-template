/**
 * 封装vite plugin的调用
 */
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { AutoImportDeps } from "./autoImport";
import { AutoRegistryComponents } from "./component";
import { ConfigInspectPlugin } from "./inspect";
import { ConfigMockPlugin } from "./mock";
import { ConfigSvgIconsPlugin } from "./svgIcons";
import { ConfigWindiCssPlugin } from "./windicss";

export function createPlugins(isBuild) {
  const vitePlugis = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx()
  ];

  // 自动导入按需引入依赖
  vitePlugis.push(AutoImportDeps());

  // 自动注册组件
  vitePlugis.push(AutoRegistryComponents());

  // vite-plugin-mock
  vitePlugis.push(ConfigMockPlugin(isBuild));

  // vite-plugin-svg-icons
  vitePlugis.push(ConfigSvgIconsPlugin());

  // vite-plugin-inspect
  vitePlugis.push(ConfigInspectPlugin());

  // vite-plugin-windicss
  vitePlugis.push(ConfigWindiCssPlugin());

  return vitePlugis;
}
