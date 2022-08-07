import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      },
      // 自定义颜色,如text-primary就可以使用,工具类中使用到颜色的地方就可以使用
      colors: {
        primary: "#123456"
      }
    }
  },
  // 扫描的文件位置
  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx,ts}"],
    exclude: [
      "node_modules",
      ".git",
      "dist",
      "windi.config.{ts,js}",
      "tailwind.config.{ts,js}"
    ]
  },
  alias: {
    // 别名,使用该类时要添加*,如*hstack
    hstack: "flex items-center"
  },
  shortcuts: {
    // 快捷方式,直接使用,vhack
    icon: "w-6 h-6 fill-current"
  }
});
