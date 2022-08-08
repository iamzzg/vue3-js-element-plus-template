export function createProxy() {
  return {
    // 正则表达式写法
    "^/fallback/.*": {
      target: "http://jsonplaceholder.typicode.com",
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(/^\/fallback/, "")
    }
  };
}
