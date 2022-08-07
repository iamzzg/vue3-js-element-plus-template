// https://github.com/vbenjs/vite-plugin-mock
export default [
  {
    url: "/api/get",
    method: "get",
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: "dragon"
        }
      };
    }
  }
];
