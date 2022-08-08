import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { createPlugins } from "./config/vite/plugins";
import { createProxy } from "./config/vite/proxy";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // let env = loadEnv(mode, process.cwd());
  // console.log("输出 loadEnv()  ::>> ", env);
  // console.log(command, mode);
  // console.log("输出   ::>> ", process.env);
  const isBuild = command === "build";
  return {
    server: {
      // port:3000,
      open: true,
      proxy: createProxy()
    },
    plugins: [createPlugins(isBuild)],
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
