<template>
  <svg aria-hidden="true" :style="getStyle" :class="[$attrs.class, 'svg-icon']">
    <use :xlink:href="symbolId"></use>
  </svg>
</template>
<script>
export default defineComponent({
  name: "SvgIcon",
  props: {
    prefix: {
      type: String,
      default: "icon"
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#333"
    },
    size: {
      type: [String, Number],
      default: 16
    }
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    const getStyle = computed(() => {
      let { size } = props;
      size += "";
      size = size.replace("px", "") + "px";
      return {
        width: size,
        height: size
      };
    });
    return { symbolId, getStyle };
  }
});
</script>

<style lang="scss" scoped>
.svg-icon {
  display: inline-block;
  vertical-align: -0.15em;
  overflow: hidden;
  fill: currentColor;
}
</style>
