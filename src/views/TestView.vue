<template>
  <div class="test-view">
    我是test
    <h1>牛逼</h1>
    <h3>{{ counter }}</h3>
    <button @click="increment">加一</button>
  </div>
  <el-row class="mb-4">
    <el-col>
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24" :offset="0">
      <el-button type="primary" size="default" @click="showNotification">
        消息通知
      </el-button>
      <el-button type="success" size="default" @click="toggleTheme">
        切换主题
      </el-button>
    </el-col>
  </el-row>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
import { toggleTheme } from "@/hooks/useLightDark.js";
const counterStore = useCounterStore();
const { counter } = storeToRefs(counterStore);
const { increment } = counterStore;

console.log("test");

function showNotification() {
  ElNotification({ title: "标题", message: "age", duration: 0 });
}
</script>

<style lang="scss" scoped>
.test-view {
  background-color: #f00;
  h1 {
    font-size: 50px;
  }
}
</style>
