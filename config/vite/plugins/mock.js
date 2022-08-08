/**
 * 引入mockjs
 */
import { viteMockServe } from "vite-plugin-mock"; // 引入mock

export function ConfigMockPlugin(isBuild) {
  let prodMock = false;
  return viteMockServe({
    mockPath: "mock",
    localEnabled: !isBuild, //是否使用本地mock文件,生产环境下不使用
    prodEnabled: isBuild && prodMock,
    // 生产环境下注入的代码
    injectCode: `
            import { setupProdMockServer } from './mockProdServer';
            setupProdMockServer();
          `
  });
}
