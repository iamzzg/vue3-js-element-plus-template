import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

/**
 * 生成svg雪碧图
 */
export function ConfigSvgIconsPlugin() {
  return createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
    // 指定symbolId格式
    symbolId: "icon-[dir]-[name]"
  });
}
