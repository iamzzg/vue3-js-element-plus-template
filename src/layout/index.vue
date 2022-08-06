<template>
  <div class="layout">
    <h1>我是布局组件</h1>
    <div>
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
      <RouterLink to="/test">首页</RouterLink>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss" scoped>
.layout {
  a + a {
    margin-left: 10px;
  }
}
</style>
