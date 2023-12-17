<template>
  <div>{{ message }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const message = ref<string>('我是子组件')
const onChange = () => {
  console.log('我是子组件方法')
}
defineExpose({
  message,
  onChange,
})
</script>
