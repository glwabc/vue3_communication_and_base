<template>
  <div class="son">
    <p>我是子组件1 点击这里会执行从父组件那里绑定的点击事件</p>
    <button>点击我也执行从父组件那里绑定的点击事件</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.son {
  width: 400px;
  height: 200px;
  background: skyblue;
}
</style>
