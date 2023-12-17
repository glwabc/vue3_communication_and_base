<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-17 19:59:04
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-17 20:09:32
-->
<template>
  <div>
    <!-- <svg :style="{ width: width, height: height }"></svg> -->
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
// 接受父组件传递过来的参数
defineProps({
  // xlink:href属性值前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使用的svg图标名字
  name: String,
  // 接受父组件指定的svg图标颜色
  color: {
    type: String,
    default: '',
  },
  // 接受父组件传递过来的svg图标宽度
  width: {
    type: String,
    default: '16px',
  },
  // 接受父组件传递过来的svg图标高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style lang="scss" scoped></style>

