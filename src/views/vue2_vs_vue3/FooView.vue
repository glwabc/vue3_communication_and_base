<template>
  <span>
    比较vue2 setup函数写法 与 vue3 setup语法糖写法 在浏览器
    控制台中暴露数据的不同
  </span>
  <FooSetup ref="refSetup" />
  <FooScriptSetup ref="refScriptSetup" />
</template>

<script setup>
import FooSetup from './FooSetup.vue'
import FooScriptSetup from './FooScriptSetup.vue'
import { onMounted, ref } from 'vue'
const refSetup = ref(null)
const refScriptSetup = ref(null)

onMounted(() => {
  console.log(refSetup.value)
  console.log(refScriptSetup.value)
})
</script>
