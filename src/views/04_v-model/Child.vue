<template>
  <div class="child">
    <h2><slot></slot></h2>
    <h3>钱数:{{ modelValue }}</h3>
    <button @click="handler">父子组件数据同步</button>
  </div>
</template>

<script setup lang="ts">
//接受props                接收父传子的数据   外部属性
let props = defineProps(['modelValue'])
//子组件内部按钮的点击回调   子给父传数据       自定义事件
let $emit = defineEmits(['update:modelValue'])
const handler = () => {
  //触发自定义事件
  //  没有改变props的值，只读    把props增加数值后，又回传给父组件
  $emit('update:modelValue', props.modelValue + 1000)
}
</script>

<style scoped>
.child {
  width: 300px;
  height: 300px;
  background: skyblue;
}
</style>
