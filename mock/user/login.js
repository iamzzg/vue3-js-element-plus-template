// https://github.com/vbenjs/vite-plugin-mock
export default [
  {
    url: "/basic-api/login",
    method: "get",
    response: () => {
      return {
        code: 0,
        data: {
          name: "dragon"
        }
      };
    }
  }
];
