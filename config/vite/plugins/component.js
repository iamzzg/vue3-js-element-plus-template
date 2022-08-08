/**
 * 按需导入,自动注册组件,
 * Element-plus,Icon
 */
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://icones.netlify.app/collection/mdi?s=account-box-multiple
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

export function AutoRegistryComponents() {
  return [
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass" }), IconsResolver()]
    }),
    Icons({
      // experimental,不需要提前下载图标集,自动下载
      autoInstall: true
    })
  ];
}
