module.exports = {
  plugins: [
    {
      name: "removeAttrs",
      params: {
        //去除svg的这三个属性，可以去除svg的颜色
        attrs: "(fill|fill-rule|fill-in-customer-information)"
      }
    }
  ]
};
