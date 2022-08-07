import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { createPlugins } from "./build/plugin";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    server: {
      // port:3000,
      open: true,
      proxy: {
        // 正则表达式写法
        "^/fallback/.*": {
          target: "http://jsonplaceholder.typicode.com",
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/fallback/, "")
        }
      }
    },
    plugins: [createPlugins({ command })],
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
  };
});
