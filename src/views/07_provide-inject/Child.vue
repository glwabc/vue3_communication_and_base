<template>
  <div class="child">
    <h1>我是子组件1</h1>
    <p>props传值：{{ message1 }}</p>
    <GrandChild :message2="message1"></GrandChild>
  </div>
</template>

<script setup lang="ts">
import GrandChild from './GrandChild.vue'
import { ref, provide } from 'vue'
let props = defineProps({ message1: { type: String } })

// 爷爷组件和父亲组件同时提供了一个相同的关键词的值，儿子组件最后会使用谁的呢？
provide('secret', '父亲组件提供的')
</script>

<style scoped>
.child {
  width: 300px;
  height: 420px;
  background: yellowgreen;
}
</style>
