/**
 * 监听修改vite.config.js,自动重启Vite
 */
import ViteRestart from "vite-plugin-restart";

export function ConfigRestartPlugin() {
  return ViteRestart({
    restart: ["*.config.[jt]s"]
  });
}
