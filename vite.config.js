import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 按需引入组件库，不需要手动带入组件以及样式,importStyle:'sass',可以用来覆盖element-plus的scss变量
    AutoImport({
      import: ["vue", "vue-router"], // 不再需要手动导入api了
      resolvers: ElementPlusResolver({ importStyle: "sass" })
    }),
    Components({ resolvers: ElementPlusResolver({ importStyle: "sass" }) })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 这里全局注入scss文件,可以直接使用里面的scss变量和其他内容
        additionalData: '@use "@/styles/element/index.scss" as *;'
      }
    }
  },
  build: {}
});
