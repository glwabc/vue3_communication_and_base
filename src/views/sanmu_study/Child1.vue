<template>
  <div>
    <h1 class="index">Child1</h1>
    <div>{{ msg }}</div>
    <button @click="handleClickMsg">更新msg</button>
    <Child></Child>
  </div>
</template>

<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue'
import Child from './Child1-Child.vue'

// defineOptions({
//     inheritArrts:false,  // 默认true，让子组件的根元素继承父组件中传递的所有属性
// });

defineProps({
  msg: {
    type: String,
  },
})

onMounted(() => {
  const cur = getCurrentInstance()
  console.log(cur?.parent)
})

const emit = defineEmits(['handleChangeMsgChild1'])

const handleClickMsg = () => {
  emit('handleChangeMsgChild1') // 执行 父组件 函数handleChangeMsg
}

const handleAlert = () => {
  alert('hello world from Child1.')
}

const child_1Msg = '我是 child1 组件的 hello'
// 最重要的一步，这里我们需要把父组件需要的属性和方法暴露出去，这样父组件才能获取的到
defineExpose({ handleAlert, child_1Msg })
</script>

<style lang="less" scoped></style>
